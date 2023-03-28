const axios = require('axios').default

const consumer = async (event) => {
for (const record of event.Records) {
    console.log("Message Body: ", record.body);
  
const payload = {
    MessageGroupId : "stock-arrival-group", //"stock-arrival-group",
    MessageAttributeProductId : "ebb60806-b0bf-11ed-8e89-069658f3b1c6", //string(추가 생산이 필요한 제품 아이디),
    MessageAttributeProductCnt : "100", //string(추가 생산 요청 수량),
    MessageAttributeFactoryId : "d5f87cb3-b0bf-11ed-8e89-069658f3b1c6" , //string(추가 생산을 요청할 공장 아이디),
    MessageAttributeRequester : "손동훈", //string(추가 생산 요청 담당자)
    CallbackUrl : "https://yjar4x54zl.execute-api.ap-northeast-2.amazonaws.com/product/donut" //string(생산 내역으로 데이터베이스에 재고를 추가할 서버의 주소)
}

  console.log("페이로드 확인: ", payload)

 
 axios.post('http://project3-factory-api.coz-devops.click/api/manufactures', payload)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

} 
};
module.exports = {
  consumer,
};
