# 🏷️ project3-msa
<br>

 - Team : 
 
 손동훈 : [Sondoobo](https://github.com/Sondoobo) | 김도형 : [kdh5983](https://github.com/kdh5983) | 최우람 : [wooov](https://github.com/wooov) |
 --- | --- | --- |

 - Duration : 2022.02.17 ~ 2022.02.22
<br>

## 📖 Summary

도넛을 판매하는 판매 API와 결합된 자동 재고 증가 시스템을 MSA의 형태로 구축하였다.

<br>

## 쇼핑몰 구매고객 리워드 시스템

## 📚 Description

- 재고가 충분할시에는 판매를 진행한다.
- 재고가 부족할 시에는 SNS로 재고 부족에 대한 알림을 전송한다.
- 재고 부족에 대한 알림을 전송 받으면 이를 생산 공장에 전달할 수 있어야 한다.
- 두 서비스 중 하나의 서비스가 Down되더라도 다른 하나의 서비스는 정상적으로 운영 가능해야 한다.


## 🖼️ Architecture
![Final_Project_Team D-페이지-3 drawio (1)](https://user-images.githubusercontent.com/119152428/228295392-d64acec2-1736-422e-bced-b5f793f52ee2.png)


 - 판매 Lambda : 판매 기능을 수행하며 판매 가능한 수량이 없을 때 SNS로 재고에 대한 부족을 전달합니다.
 - SQS : 판매와 재고 증가의 영역을 느슨하게 결합하여 두 서비스간 장애 발생시에도 다른 하나의 서비스는 정상 작동 될 수 있도록 구성하였습니다.
 - 재고 증가 Lambda : 부족 재고에 대한 생산 요청을 전달하는 기능을 담당합니다.
 
<br>

## 🛠️ Environment
<div align=center>
<img src="https://img.shields.io/badge/AWS-232F3E?stylefor-the-badge&logo=Amazon AWS&logoColor=FAFAFA" width="80" height="30"/>
<img src="https://img.shields.io/badge/MySQL-071D49?stylefor-the-badge&logo=MySQL&logoColor=4479A1" width="80" height="30"/>
<img src="https://img.shields.io/badge/Node.js-173B3F?stylefor-the-badge&logo=Node.js&logoColor=339933" width="80" height="30"/>
<img src="https://img.shields.io/badge/Serverless-000000?stylefor-the-badge&logo=Serverless&logoColor=FD5750" width="80" height="30"/>

 </div>
 <br>

## 🖥️ Prerequisites
AWS 배포를 구현하기 위해서는 AWS에 계정이 있어야 합니다.
```
https://aws.amazon.com/ko/
``` 
판매 서비스의 Lambda 함수를 배포하기 위해서는 sales-api 폴더에서 다음을 실행합니다.
```
npm install -g serverless
serverless deploy
```
재고 증가 서비스의 Lambda 함수를 배포하기 위해서는 stock-increase-lambda 폴더에서 다음을 실행합니다.
```
npm install -g serverless
serverless deploy
```
데이터베이스에 값을 넣기 위해서는 sales-api 폴더에서 다음을 실행합니다.
```
mysql -h [데이터베이스 엔드포인트] -u [데이터베이스 사용자명] -P 3306 -p [데이터베이스 사용자 비밀번호]
create database factory
use factory
source init.sql
```
<br>
