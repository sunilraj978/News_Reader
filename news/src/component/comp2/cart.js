import React,{useState,useEffect,createRef} from 'react'
import Media from './style'
import className from 'classnames';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core'

const Cart = ({articles:{description,publishedAt,source,title,url,urlToImage},i,active}) => {

    const classes = Media();
    const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === active && elRefs[active]) {
      scrollToRef(elRefs[active]);
    }
  }, [i, active, elRefs]);

    return (
        <Card ref={elRefs[i]} className={className(active===i?classes.activeCard:null)} style={{marginLeft:'30px',marginRight:'30px'}} >
            <CardActionArea href={url} target="_blank" >
                <CardMedia className={classes.media} image={urlToImage?urlToImage:'https://static.vecteezy.com/system/resources/previews/001/213/871/non_2x/breaking-news-background-design-vector.jpg'} />
                <div>
    <Typography variant="body2" color='textSecondary' component="h2" >{(new Date(publishedAt)).toDateString()}</Typography>
    <Typography variant="body2" color='textSecondary' component="h2" >{source.name}</Typography>
                </div>
    <Typography gutterBottom variant="h6">{title}</Typography>
                <CardContent>
    <Typography variant="body2" color='textSecondary' component="p" >{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >Learn More</Button>
    <Typography variant="h5" color='textSecondary' >{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default Cart
