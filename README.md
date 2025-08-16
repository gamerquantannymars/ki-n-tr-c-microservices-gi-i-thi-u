# Kiến Trúc Microservices Giới Thiệu

## Giới Thiệu
Đây là một dự án demo về kiến trúc microservices, nơi bạn có thể quản lý sách trong một thư viện. Mỗi dịch vụ (microservice) đảm nhận một chức năng riêng biệt, giúp bạn hiểu rõ hơn về cách các dịch vụ tương tác với nhau trong một ứng dụng lớn.

## Các Microservices
1. **Service sách**: Quản lý thông tin sách như tên, tác giả, thể loại.
2. **Service người dùng**: Quản lý thông tin người dùng như tên, địa chỉ, lịch sử mượn sách.
3. **Service mượn sách**: Quản lý quá trình mượn và trả sách.

## Cài Đặt
Để sử dụng dự án này, bạn cần:
1. Cài đặt Docker.
2. Clone repo này.
3. Chạy lệnh `docker-compose up` để khởi động tất cả các dịch vụ.

## Công Nghệ Sử Dụng
- Node.js cho back-end.
- MongoDB cho cơ sở dữ liệu.
- Docker cho việc đóng gói các dịch vụ.

## Tương Lai
Dự án sẽ được mở rộng với các chức năng mà người dùng có thể yêu cầu, chẳng hạn như đánh giá sách, tìm kiếm nâng cao và quản lý người dùng.

## Liên Hệ
Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ qua email địa chỉ@example.com.