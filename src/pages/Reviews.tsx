import React from 'react';

// Importing images
import oneImage from '../assets/御私藏台灣肉乾珍珠奶茶1.jpg';
import twoImage from '../assets/柴窯火腿製造所三明治1.jpg';
import threeImage from '../assets/拿坡里炸雞三商炸雞1.jpg';
import fourImage from '../assets/MITSUIOUTLETPARK林口1.jpg';
import fiveImage from '../assets/越共咖啡1.jpg';
import sixImage from '../assets/小王煮瓜1.jpg';
import sevenImage from '../assets/源芳刈包1.jpg';
import eightImage from '../assets/小品雅廚1.jpg';
import nineImage from '../assets/窒愛1.jpg';
import tenImage from '../assets/咒1.jpg';

const Reviews: React.FC = () => {
  return (
    <div className="reviews">
      <h2>事物評論</h2>
      <ul>
        <li>
          <b>youtuber解婕翎/拿坡里炸雞&三商炸雞：</b>
          <p>"被披薩耽誤的拿坡里炸雞，現在竟然開新店了！他們把炸雞獨立出來，原本叫做「拿坡里炸雞」，現在正式改名為「三商炸雞」..."</p>
          <img src={oneImage} alt="拿坡里炸雞三商炸雞1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=IVinllF0hdM" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber那個女生kiki/林口outlet：</b>
          <p>"林口三井Outlet是一個非常適合購物和放鬆的地方，環境設計時尚，氣氛悠閒。這裡的店鋪種類繁多，從國際品牌到平價商品一應俱全..."</p>
          <img src={twoImage} alt="MITSUIOUTLETPARK林口1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=DWOnM3bJ4lI" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber解婕翎/御私藏 台灣肉乾珍珠奶茶：</b>
          <p>"它是來自於台南的手搖飲品牌店，那它去年還獲得紐約珍奶節獲獎。台灣肉乾珍珠奶茶，網友稱他們為手搖界低調王者..."</p>
          <img src={threeImage} alt="御私藏台灣肉乾珍珠奶茶1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=A8Qz5j29oDg" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber解婕翎/柴窯火腿製造所 金沙肉鬆三明治：</b>
          <p>"很好吃! 它的肉鬆好香喔!它吃下去是鹹甜鹹甜的，配上它的那個起司片，整個吃起來的味道非常的香..."</p>
          <img src={fourImage} alt="柴窯火腿製造所三明治1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=A8Qz5j29oDg" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>google/2024必比登美食：</b>
          <p>"2024必比登美食名單中，包含了多家必訪的美食餐廳，這些餐廳憑藉其獨特的風味和創新的菜單而脫穎而出，成為不少美食愛好者的首選..."</p>
          <a href="https://www.youtube.com/watch?v=jdGuwJKEHOE" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>google/越共咖啡：</b>
          <p>"Cong Caphe共咖啡是越南經典咖啡品牌，2007年創立，共咖啡裝潢、周邊產品，乃至服務生制服皆為20年代共產時期懷舊風，極具特色，是越南旅遊必訪景點..."</p>
          <img src={fiveImage} alt="越共咖啡1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=OSp6_8VHyFw" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber解婕翎/小王煮瓜：</b>
          <p>"小王煮瓜滷肉飯以其傳統台灣風味滷肉飯而聞名。店內的滷肉飯選材講究，滷汁濃郁，配上軟嫩的豬肉，令人垂涎欲滴..."</p>
          <img src={sixImage} alt="小王煮瓜1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=A8Qz5j29oDg" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber解婕翎/源芳刈包：</b>
          <p>"源芳刈包提供經典的台灣刈包，肉質多汁，香料與醬料的比例恰到好處。刈包內的五花肉軟嫩入味，麵皮鬆軟，搭配花生粉與酸菜..."</p>
          <img src={sevenImage} alt="源芳刈包1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=A8Qz5j29oDg" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>youtuber解婕翎/小品雅廚：</b>
          <p>"小品雅廚是一家注重食材與烹飪工藝的餐廳，提供創意台灣料理。餐廳的菜餚選材講究，融合了傳統與現代的味道..."</p>
          <img src={eightImage} alt="小品雅廚1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=A8Qz5j29oDg" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>google/Steam遊戲《窒愛》：</b>
          <p>"《窒愛 (SUFFOCATE)》 是一款台灣製作的生存恐怖遊戲，最近在 Steam 上推出。這款遊戲以其獨特的心理恐怖元素..."</p>
          <img src={nineImage} alt="窒愛1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=pwM3Y5krTcA" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
        <li>
          <b>google/Steam遊戲《咒》：</b>
          <p>"《咒》是一款融合台灣民俗的恐怖遊戲，帶領玩家探索神秘的邪教儀式與恐怖的生存情境..."</p>
          <img src={tenImage} alt="咒1.jpg" style={{ width: '300px', borderRadius: '10px' }} />
          <a href="https://www.youtube.com/watch?v=u4D2FUpKYSc" target="_blank" rel="noopener noreferrer">觀看影片</a>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
