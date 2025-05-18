# StepUp6

Website [StepUp6](https://stepup6.com) là bộ tài liệu luyện thi toàn diện dành cho học sinh lớp 5 chuẩn bị thi vào THCS chuyên. Website được xây dựng bằng [Docusaurus](https://docusaurus.io/), một công cụ tạo website tĩnh hiện đại.

## Mục tiêu dự án

StepUp6 nhằm cung cấp:
- Tài liệu toàn diện từ các trường THCS chuyên hàng đầu
- Nội dung phát triển kỹ năng thực hành cho học sinh
- Lộ trình ôn tập khoa học từ cơ bản đến nâng cao
- Hệ thống đề thi và bài tập thực hành kèm đáp án

## Cài đặt

```
$ pnpm install
```

## Phát triển cục bộ

```
$ pnpm start
```

Lệnh này khởi động máy chủ phát triển cục bộ và mở cửa sổ trình duyệt. Hầu hết các thay đổi được cập nhật mà không cần khởi động lại máy chủ.

## Xây dựng

```
$ pnpm build
```

Lệnh này tạo nội dung tĩnh vào thư mục `build` và có thể được phục vụ bằng bất kỳ dịch vụ lưu trữ nội dung tĩnh nào.

## Triển khai

Sử dụng SSH:

```
$ USE_SSH=true pnpm deploy
```

Không sử dụng SSH:

```
$ GIT_USER=<Tên người dùng GitHub của bạn> pnpm deploy
```

Nếu bạn đang sử dụng GitHub Pages để lưu trữ, lệnh này là cách thuận tiện để xây dựng trang web và đẩy đến nhánh `gh-pages`.

## Đóng góp

Chào mừng đóng góp vào dự án này. Vui lòng tạo pull request hoặc báo cáo vấn đề trên [GitHub repository](https://github.com/tuanpmt/stepup6.com).
