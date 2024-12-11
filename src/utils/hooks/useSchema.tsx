import * as yup from "yup";

export const useSchema = ()=>{
    return yup.object().shape({
    title: yup
        .string()
        .required('제목을 입력하세요.')
        .max(50, '제목은 50자를 초과할 수 없습니다.'),

    sub_title: yup
        .string()
        .required('부제목을 입력하세요.')
        .max(100, '부제목은 100자를 초과할 수 없습니다.'),

    price: yup
        .number()
        .typeError('가격은 숫자로 입력해야 합니다.')
        .required('가격을 입력하세요.')
        .min(0, '가격은 0 이상이어야 합니다.'),

    author: yup
        .string()
        .required('저자를 입력하세요.')
        .max(50, '저자는 50자를 초과할 수 없습니다.'),

    image_url: yup
        .mixed()
        .test('fileType', '이미지는 PNG 또는 JPEG 형식이어야 합니다.', (value) => {
            if (value && value instanceof File) {
                return ['image/png', 'image/jpeg'].includes(value.type);
            }
            return true;
        })
        .test('fileSize', '파일 크기는 5MB 이하이어야 합니다.', (value) => {
            if (value && value instanceof File) {
                return value.size <= 5 * 1024 * 1024; // 5MB 이하
            }
            return true; 
        }),
    publisher: yup
        .string()
        .required('출판사를 입력하세요.')
        .max(50, '출판사는 50자를 초과할 수 없습니다.'),

    published_date: yup
        .date()
        .typeError('유효한 날짜를 입력하세요.')
        .required('출판일을 입력하세요.'),

    sales_quantity: yup
        .number()
        .typeError('판매 수량은 숫자로 입력해야 합니다.')
        .required('판매 수량을 입력하세요.')
        .min(0, '판매 수량은 0 이상이어야 합니다.'),
    });
}