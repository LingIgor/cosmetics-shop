
import { useParams } from 'react-router-dom';
import cardsData from "../../products/products.json"
import { useEffect, useState } from 'react';
import IMG from "../../images/product.jpg";
import { BtnBuy, CardConteiner, ProductCategory, ProductImage, ProductPrice, ProductRating, ProductTitle } from '../OneProduct/OneProduct.styled';
import { ProductCardLink } from './OneProduct.styled';



console.log(cardsData)
const  findCardById = (array, id) => {
  return array.find(card => card.id === id);
} 


export const OneProduct = () => {
  const [card, setCard] = useState("");
  const { id} = useParams();


   
  
    useEffect(() => {     
      const foundCard = findCardById(cardsData, parseInt(id));  
      if (foundCard) {
        setCard(foundCard);
      } else {
        console.log('Продукт не знайденно');
      }
    }, [id]);


    
  const priceWithDiscount = (price) => {
    const discount = price * 0.1;
    return discount;
  };


 



  return (
   <div>
      {card ? (
        <div>
          <ProductCardLink  key={id}to={`/product/${id}`}>
          
          <CardConteiner>
            <ProductTitle variant="h6" component="div">
              {card.title}
            </ProductTitle>
            <ProductCategory variant="body2" color="text.secondary">
              {card.category}
            </ProductCategory>
            <ProductRating variant="body2" color="text.secondary">
              Rating: {card.rating}
            </ProductRating>
            <ProductPrice>
              <div style={{ color: " red" }}>
                {card.price - priceWithDiscount(Number(card.price))} <span>₴</span>
              </div>
              <div style={{ textDecoration: "line-through", color: "grey" }}>
                {card.price} <span>₴</span>
              </div>
            </ProductPrice>
          </CardConteiner>
          <ProductImage component="img" alt="Card Image" src={IMG} />
          <BtnBuy >Купити</BtnBuy>    
          </ProductCardLink>
          <div style={{width:"70%", height:"100%", border:"1px solid pink", margin:"0 auto", display:"flex", gap:"200px", padding:"20px"}}><h1>Характеристики</h1>
         <div>
         <p>Прем’єра аромату: 2022</p>
        <p>Країна ТМ: Франція</p>
        <p>Зроблено в: Франція</p>
        <p>Стать: для жінок</p>
        <p>Класифікація: мас маркет</p>
        <p>Тип аромату: квіткові, фруктові</p>
        <p>Початкова нота: Груша, Рожевий перець</p>
        <p>Нота серця: Жасмин, Троянда</p>
        <p>Кінцева нота: Кашемірове дерево, Мускус</p>
         </div>
         </div>
        
        
        </div>
      ) : (
        <p>Карточка не найдена</p>
      )}
    </div>  
  )
//   const [details, setDetails] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('pending');
//   const { movieId } = useParams();

//   const location = useLocation();



//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const data = await getMoviesDeteils(movieId);
//         setDetails(data);
//         setStatus('resolved');
//       } catch (error) {
//         setStatus('rejected');
//         setError(error);
//       }
//     };
//     fetchMovieDetails(movieId);
//   }, [movieId]);

//   const { title, poster_path, vote_average, overview, genres } = details;

//   const userScore = vote_average
//     ? `${(vote_average * 10).toFixed(0)}%`
//     : 'Not rated yet';

//   return (
//     <div>
//       <div>
//         <Back to={location.state?.from ?? '/'}>Go back</Back>
//       </div>

//       {status === 'pending' && 'Loading...'}
//       {status === 'rejected' && <h3>{error.message}</h3>}

//       {status === 'resolved' && (
//         <div>
//           <Wrap>
//             <div>
//               <img src={`${baseUrl}${poster_path}`} alt={title} width="600px" />
//             </div>
//             <div>
//               {<h1>{title}</h1>}
//               <Text>User score: {userScore}</Text>
//               <h2>Overview</h2>
//               <Text>{overview}</Text>
//               <h2>Genres</h2>
//               {genres && genres.map(el => <Text key={el.id}>{el.name}</Text>)}
//             </div>
//           </Wrap>
//           <Wrapper>
//             <Text>Additional information</Text>
//             <Back to="cast"> Cast </Back>
//             <Back to="reviews"> Reviews </Back>
//           </Wrapper>
//         </div>
//       )}
//       <Outlet />
//     </div>
//   );
};

