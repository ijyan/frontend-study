/*
thumb 클릭: 해당 이미지로 full-img 변경

버튼 클릭 시
1. Darken 버튼 클릭 시
: 버튼의 textContent가 'Lighten'으로 변경
: overlay의 배경색이 검정, 투명도(0.5)로 지정

2. Lighten 버튼 클릭 시
: 버튼의 textContent가 'Darken'으로 변경
: overlay의 배경색이 검정, 투명도(0.5)로 지정
 */

const images = [
  'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1Sma/image/PFtxS4C5Z4ziAAMUQnN8jmsFyF8.JPG',
  'https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/e7b94b0c106a8.jpg',
  'https://storage.googleapis.com/ikidane/upload/2019_03_a004049c776406a92bb1c4f5c41c78a8e493e6_m_6bc1752e6f/2019_03_a004049c776406a92bb1c4f5c41c78a8e493e6_m_6bc1752e6f.jpg',
  'https://img.etnews.com/photonews/2302/1618767_20230203131720_605_0002.jpg',
  'https://cdn.healthinnews.co.kr/news/photo/202204/29034_29822_2928.jpg'
];

const alts = {
  'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1Sma/image/PFtxS4C5Z4ziAAMUQnN8jmsFyF8.JPG': 'img1.jpg',
  'https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/e7b94b0c106a8.jpg': 'img2.jpg',
  'https://storage.googleapis.com/ikidane/upload/2019_03_a004049c776406a92bb1c4f5c41c78a8e493e6_m_6bc1752e6f/2019_03_a004049c776406a92bb1c4f5c41c78a8e493e6_m_6bc1752e6f.jpg': 'img3.jpg',
  'https://img.etnews.com/photonews/2302/1618767_20230203131720_605_0002.jpg': 'img4.jpg',
  'https://cdn.healthinnews.co.kr/news/photo/202204/29034_29822_2928.jpg': 'img5.jpg',
};
