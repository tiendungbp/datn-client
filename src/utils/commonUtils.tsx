import imageCompression from 'browser-image-compression';

export default class CommonUtils {
    // GIẢM KÍCH THƯỚC ẢNH
    static compressImage = async (file: File): Promise<File> => {
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 1920
        };
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    };

    // KIỂM TRA NGÀY SINH (NHÂN VIÊN PHẢI ĐỦ 18 TUỔI)
    static checkEmployeeAge = (dob: Date): boolean => {
        const currentDate = new Date();
        let dd = currentDate.getDate();
        let mm = currentDate.getMonth() + 1;
        let yyyy = currentDate.getFullYear();

        let dobDate = dob.getDate();
        let dobMonth = dob.getMonth() + 1;
        let dobYear = dob.getFullYear();

        if (yyyy - dobYear < 18) {
            return false;
        } else {
            if (yyyy - dobYear > 18) {
                return true;
            } else {
                if (mm - dobMonth < 0) {
                    return false;
                } else {
                    if (mm - dobMonth > 0) {
                        return true;
                    } else {
                        if (dd - dobDate < 0) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }
        }
    };

    // KIỂM TRA SỐ ĐIỆN THOẠI
    static checkPhoneNumber = (phone: string): boolean => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        return vnf_regex.test(phone);
    };

    // KIỂM TRA ĐỘ DÀI MẬT KHẨU
    static checkPasswordLength = (password: string): boolean => {
        if (password.length < 6 || password.length > 20) {
            return false;
        } else {
            return true;
        }
    };

    // ĐỊNH DẠNG TIỀN TỆ
    static VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    // VIẾT HOA CHỮ CÁI ĐẦU CỦA MỖI TỪ
    static capitalizeEachWord = (string: string): string => {
        const arr = string.split(" ");
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const result = arr.join(" ");
        return result;
    };

    // VIẾT HOA DUY NHẤT CHỮ CÁI ĐẦU CỦA TỪ ĐẦU TIÊN (thứ hai -> Thứ hai)
    static capitalizeFirstLetter = (string: string): string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
}
