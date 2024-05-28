import React,{useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import {Grid,Grow} from '@material-ui/core'
import wordsToNumbers from 'words-to-numbers'
import NewsCart from './component/comp1/newsCart'

const alanKey = '44f65976304bce76c6b469842a25cc012e956eca572e1d8b807a3e2338fdd0dc/stage'


const App = ()=>{

    const [Articles,setArticle] = useState([])
    const [active,setActive] = useState(-1);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number})=>{
                if(command === 'newHeadLines'){
                   setArticle(articles)
                   setActive(-1)
                }
                else if(command==='highlights'){
                    setActive((prev)=>prev+1);
                }
                else if(command === 'open'){
                    const parseNumber = number.length>2?wordsToNumbers(number,{fuzzy:true}):number;
                    const article = articles[parseNumber-1];
                    if(parseNumber>20){
                        alanBtn().playText('Only 20 articles available')
                    }
                    else if(article){
                        window.open(article.url,'_blank')
                    }
                }
            }
        })
    },[])
    
    

    return(
        <div>
            <Grow in>
            <Grid container alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'50px',marginLeft:'auto',marginRight:'auto',width:'30%',borderRadius:'30px'}} >
            <img src='https://motionarray.imgix.net/preview-327986-dY2hb6egMT-high_0015.jpg' style={{height:'200px',width:'400px'}} alt="" />
                        </Grid>
            </Grid>
            </Grow>
            <NewsCart articles = {Articles} active={active} />
        </div>
    )
}


export default App