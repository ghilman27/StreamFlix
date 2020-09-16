import React from 'react';
import {
	GridList,
	GridListTile,
	GridListTileBar,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import useStyles from './SectionList.styles';


const SectionList = (props) => {
	const styles = useStyles(props);
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));

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
					<GridListTile key={tile.id}>
						<img
							src={`https://image.tmdb.org/t/p/original${tile.image}`}
							alt={tile.title}
						/>
						<GridListTileBar title={tile.title} subtitle={tile.subtitle} />
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

export default SectionList;
