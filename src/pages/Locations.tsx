import React, { useState } from 'react';

const Locations: React.FC = () => {
  // 用來控制每個地點的顯示狀態
  const [visibleLocation, setVisibleLocation] = useState<string | null>(null);

  // 切換顯示的地點
  const toggleLocation = (location: string) => {
    setVisibleLocation(visibleLocation === location ? null : location);
  };

  return (
    <div className="locations">
      <h2>熱銷地點</h2>
      <ul>
        <li>
          <button onClick={() => toggleLocation('napoli')}>切換 拿坡里炸雞 / 三商炸雞（農安店）</button>
          {visibleLocation === 'napoli' && (
            <div>
              <p>地址：104029台北市中山區農安街13號</p>
              <a href="https://maps.app.goo.gl/qWJixKcRcXRW7Fke6" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('mitsui')}>切換 MITSUI OUTLET PARK 林口</button>
          {visibleLocation === 'mitsui' && (
            <div>
              <p>地址：244新北市林口區文化三路一段356號</p>
              <a href="https://maps.app.goo.gl/Fxu8qs2UQXFCzkieA" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('chayao')}>切換 柴窯火腿製造所 三明治專賣店（大巨蛋店）</button>
          {visibleLocation === 'chayao' && (
            <div>
              <p>地址：110台北市信義區忠孝東路四段515號B2</p>
              <a href="https://maps.app.goo.gl/ys5E8BdwFe3VT9hP6" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('cozy')}>切換 御私藏 Cozy Tea Loft 大巨蛋門市</button>
          {visibleLocation === 'cozy' && (
            <div>
              <p>地址：110台北市信義區忠孝東路四段515號</p>
              <a href="https://maps.app.goo.gl/7Czi3ZFfjeFoGxMRA" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('cozy')}>切換 越共咖啡</button>
          {visibleLocation === 'cozy' && (
            <div>
              <p>地址：100台北市中正區開封街一段16號</p>
              <a href="https://maps.app.goo.gl/Hw9gqEB6Upm4f92g7" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('cozy')}>切換 小王煮瓜</button>
          {visibleLocation === 'cozy' && (
            <div>
              <p>地址：108台北市萬華區華西街17之4號攤位153號</p>
              <a href="https://maps.app.goo.gl/mD3jtnZTG9vW1xyPA" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('cozy')}>切換 源芳刈包</button>
          {visibleLocation === 'cozy' && (
            <div>
              <p>地址： 108台北市萬華區華西街17-2號</p>
              <a href="https://maps.app.goo.gl/UtwHCDobdDPqijM79" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
        <li>
          <button onClick={() => toggleLocation('cozy')}>切換 小品雅廚</button>
          {visibleLocation === 'cozy' && (
            <div>
              <p>地址：104台北市中山區中原街130號</p>
              <a href="https://maps.app.goo.gl/5i329C9voHE6PBRA9" target="_blank" rel="noopener noreferrer">Google Maps 來源</a>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Locations;
