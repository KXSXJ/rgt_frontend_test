# RGT 프론트엔드 테스트

## 아키텍처

- **프론트엔드**: Next.js (v12)
- **백엔드**: MySQL2
- **데이터베이스**: MySQL
- **배포**: EC2 + RDS

## EC2-SSH 환경

- **OS**: Ubuntu 18.04
- **Node.js 버전**: 17.9.1
- **npm 버전**: 8.11.0

## 실행 방법

### 사전 준비 사항

1. **MySQL**: MySQL 설치 및 설정
2. **Cloudinary**: Cloudinary 설정 (미디어 관리)

### 설치 방법

1. 레포지토리 클론:

    ```bash
    git clone https://github.com/KXSXJ/rgt_frontend_test
    ```

2. 의존성 설치:

    ```bash
    npm install
    ```

3. `.env.local` 또는 `.env.production` 파일에 아래의 환경 변수를 추가:

    ```env
    DB_HOST=YOUR_DB_HOST
    DB_USER=YOUR_DB_USER
    DB_PASSWORD=YOUR_DB_PASSWORD
    DB_NAME=YOUR_DB_NAME
    DB_PORT=YOUR_DB_PORT

    NEXT_PUBLIC_API_URL=YOUR_API_URL

    CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
    CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
    ```
4. mysql파일에 쿼리를 복사하여 workbanch에 붙여넣고 실행한다.
- create database bookstore;
- use bookstore;
- CREATE TABLE books
- INSERT INTO books


## 기능 구현

- **REST API**를 통한 **CRUD** 구현
- **페이지 라우팅** 및 **동적 라우팅** 구현
- **쿼리 스트링**을 활용한 페이지 전환 구현

## 사용 기술

- **프레임워크 및 라이브러리**:
    - Next.js 12
    - React 18
- **캐싱**:
    - React Query + Next.js Hydration
- **로딩 및 에러 처리**: 미구현

## 애플리케이션 실행

1. 개발 서버 시작:

    ```bash
    npm run dev
    ```

2. [http://localhost:3000](http://localhost:3000)에서 애플리케이션에 접근

## 배포 현황
**배포완료**

[배포된 페이지](http://43.201.201.247)
 
---
