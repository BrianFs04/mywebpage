import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
		maxWidth: 355,
	},
});

const Carde = ({ title, img, text, ghLink }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} style={{ margin: '30px 0' }}>
			<CardActionArea
				component='a'
				href={ghLink}
				title={title}
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'none', color: 'inherit' }}
				className='portfolio-link'
			>
				<CardMedia
					component='img'
					alt={title}
					height='130'
					image={img}
					title={title}
				/>
				<CardContent>
					<h2 className='portfolio-title'>{title}</h2>
					<p className='portfolio-body'>{text}</p>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Carde;
