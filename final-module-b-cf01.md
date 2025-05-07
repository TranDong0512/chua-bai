# ĐỀ BÀI KIỂM TRA JAVASCRIPT - Module B - CODEFARM

---

**Thời gian: 120 phút**
**Bài toán: Xây dựng ứng dụng web quản lý sinh viên**
**Sử dụng localStorage để quản lý dữ liệu**
**Chấm điểm tại lớp**
**Học viên được sử dụng bootstrap để làm giao diện**
**Học viên không sử dụng AI hoặc internet trong quá trình làm bài**

---

## Dữ liệu sinh viên dạng

```javascript
[
  {
    id: 1,
    name: "Toro",
    math: 8,
    english: 7,
    science: 6,
  },
  {
    id: 2,
    name: "Ly Tieu Long",
    math: 4,
    english: 3,
    science: 5,
  },
  {
    id: 3,
    name: "Donal Trump",
    math: 9,
    english: 9,
    science: 10,
  },
];
```

---

## Yêu cầu

**1. Hiển thị danh sách sinh viên (2 điểm)**

- Hiển thị danh sách sinh viên dưới dạng bảng
- Tính **điểm trung bình** và **học lực**
  - Giỏi: >= 8
  - Khá: >=6.5 - 8
  - Trung bình: >=5 - 6.5
  - Yếu: < 5
- Bảng bao gồm các thông tin: **Id, Họ tên, Điểm Toán, Điểm Anh, Điểm Khoa học, Điểm trung bình, Học lực** và 2 nút: **"Xóa"**, **"Cập nhật điểm"**.

**2. Thêm sinh viên mới (2 điểm)**

- Form nhập: **Họ tên, Điểm Toán, Điểm Anh, Điểm Khoa học.**
- Khi nhấn **"Thêm sinh viên"**, cập nhật danh sách.
- **Kiểm tra dữ liệu** và **hiển thị lỗi** khi các trường không nhập đủ, đúng dữ liệu

**3. Xóa sinh viên (1 điểm)**

- Mỗi sinh viên có nút **"Xóa"** tương ứng, cập nhật danh sách.
- Sau khi xóa thành cồng hiển thông báo alert

**4. Cập nhật điểm sinh viên (2 điểm)**

- Nút **"Cập nhật điểm"** mở input chỉnh sửa được các đầu điểm của sinh viên (lựu ý: không thể cập nhật tên sinh viên).
- Nhấn **"Lưu"**, tính lại điểm trung bình, học lực và cập nhật lại giao diện

**5. Tìm kiếm sinh viên theo tên (1 điểm)**

- Ô input **tìm kiếm** sẽ lọc danh sách theo tên (không phân biệt hoa thường).

**6. Sắp xếp sinh viên (1 điểm)**

- **Dropdown (select-option)** chọn sắp xếp theo **Điểm trung bình (Cao → Thấp, Thấp → Cao)** hoặc huỷ sắp xếp.

**7. Lọc sinh viên theo học lực (1 điểm)**

- **Dropdown (select-option)** lọc theo **Giỏi, Khá, Trung bình, Yếu**.

---

## Tổng kết (10 điểm)

- Hiển thị danh sách (2đ)
- Thêm sinh viên (2đ)
- Xóa sinh viên (1đ)
- Cập nhật điểm (2đ)
- Tìm kiếm (1đ)
- Sắp xếp (1đ)
- Lọc học lực (1đ)

**Chúc các bạn làm bài tốt!!!**
