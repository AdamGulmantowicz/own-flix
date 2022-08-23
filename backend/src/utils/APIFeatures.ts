import type { Query } from "mongoose";

interface IQueryString {
  page?: number;
  limit?: number;
  fields?: string;
  sort?: string;
  [X: string]: unknown;
}

export class APIFeatures<T, K> {
  query: Query<T, K>;
  queryStr: IQueryString;

  constructor(query: Query<T, K>, queryStr: IQueryString) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    //ADVANCED FILTERING
    const queryObj = { ...this.queryStr };
    // console.log(queryObj);
    const excludedFiles = ["page", "sort", "limit", "fields"];
    excludedFiles.forEach((el) => delete queryObj[el]);

    // console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // @ts-ignore
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    /// SORTING
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  limitFields() {
    /// FIELDS
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(",").join(" ");
      this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }

    return this;
  }

  paginate() {
    let { page, limit } = this.queryStr;
    page = typeof page === "number" ? page : 100;
    limit = typeof limit === "number" ? limit : 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
