import React, { useState } from 'react';
import {
	GridList,
	GridListTile,
	GridListTileBar,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import useStyles from './SectionList.styles';
import { useHistory } from 'react-router-dom';
import { createSlug } from '../../utils/utils';
import cx from 'classnames';


require('dotenv').config();
const IMAGE_BASE_URL = process.env.REACT_APP_API_IMAGE_BASE_URL;
const IMAGE_PLACEHOLDER = 'https://via.placeholder.com/1000x1500';


const SectionList = (props) => {
	const styles = useStyles(props);
	const history = useHistory();
	const [ loaded, setLoaded ] = useState({});
	const { useLink } = props;
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));

	const handleClick = (id, title) => {
		if (useLink) {
			history.push(`/${id}-${createSlug(title)}`)
			window.scrollTo(0, 0)
		}
	}

	const handleImageLoaded = (id) => {
		setLoaded((prevLoaded) => ({
			...prevLoaded,
			[id]: true,
		}))
	}

	return (
		<div className={styles.root}>
			<Typography
				variant='h5'
				className={styles.sectionTitle}
				color='secondary'
			>
				{props.sectionTitle}
			</Typography>
			<GridList
				cellHeight={props.height}
				className={styles.gridList}
				cols={smallScreen ? 3.5 : largeScreen ? 8.5 : 5.5}
			>
				{props.data.map((tile) => (
					<GridListTile 
						key={tile.id}
						className={cx({
							[styles.listTile]: useLink
						})}
						onClick={() => {handleClick(tile.id, tile.title)}}
					>
						<img
							src={loaded[tile.id] ? `${IMAGE_BASE_URL}${tile.image}` : IMAGE_PLACEHOLDER}
							alt={tile.title}
							onLoad={() => {handleImageLoaded(tile.id)}}
						/>
						<GridListTileBar title={tile.title} subtitle={tile.subtitle} />
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

export default SectionList;
