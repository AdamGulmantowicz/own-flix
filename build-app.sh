echo "Starting up building the app..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
docker exec server mkdir -p build
docker exec server cp -R src/public build/
echo "App was built successfully!"