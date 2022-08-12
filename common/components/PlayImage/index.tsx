import { FC } from 'react'
import {
	IStyledPlayImageProps,
	StyledPlayButton,
	StyledPlayImage,
} from './PlayImage.styles'
import { PropsWithChildren } from 'react'
import { PlayIconFill } from '../Icons'

interface IPlayImageProps extends PropsWithChildren<IStyledPlayImageProps> {
	onClick?: () => void
}

const PlayImage: FC<IPlayImageProps> = ({ image, height = 287, onClick }) => {
	return (
		<StyledPlayImage image={image} height={height}>
			<StyledPlayButton onClick={onClick}>
				<PlayIconFill />
			</StyledPlayButton>
		</StyledPlayImage>
	)
}

export default PlayImage
