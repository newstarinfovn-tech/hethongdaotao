// ═══════════════════════════════════════════════════════════
// DANH SÁCH 22 NGÀNH NGHỀ (KÈM ẢNH & TÊN GIÁO VIÊN)
// ═══════════════════════════════════════════════════════════
window.NEWSTAR_MAJORS = [
  {
    id: "huongdan",
    name: "HƯỚNG DẪN SỬ DỤNG & QUY ĐỊNH HỌC – THI",
    folder: "huongdan", // Đổi đúng theo tên thư mục chứa file theory.js của anh
    icon: "fa-book-open",
    enabled: true,
    isGuide: true
  },
  { id: 'cham-soc-da',  folder: 'cham-soc-da',  name: 'Chăm sóc da',                                          enabled: true,  teacher: 'My',     avatar: 'my-chamsocda.jpg' },
  { id: 'cntt-coban',   folder: 'cntt-coban',   name: 'Công nghệ thông tin cơ bản',                           enabled: false,  teacher: 'Trinh',  avatar: 'trinh-tinhoc.jpg' },
  { id: 'duong-sinh',   folder: 'duong-sinh',   name: 'Dưỡng sinh Đông y',                                    enabled: true,  teacher: 'Diệp',   avatar: 'diep-duongsinh.jpg' },
  { id: 'goi-dau',      folder: 'goi-dau',      name: 'Gội đầu dưỡng sinh',                                   enabled: true,  teacher: 'Tuyết',  avatar: 'tuyet-goidau.jpg' },
  { id: 'me-va-be',     folder: 'me-va-be',     name: 'Kỹ năng chăm sóc mẹ và bé',                            enabled: false,  teacher: 'Linh',   avatar: 'linh-mebe.jpg' },
  { id: 'cao-tuoi',     folder: 'cao-tuoi',     name: 'Kỹ năng chăm sóc người cao tuổi',                      enabled: false,  teacher: 'Phước',  avatar: 'phuoc-nguoicaotuoi.jpg' },
  { id: 'gia-dinh',     folder: 'gia-dinh',     name: 'Kỹ năng hỗ trợ chăm sóc sức khỏe gia đình',             enabled: false,  teacher: 'Mai',    avatar: 'mai-chamsocsk.jpg' },
  { id: 'kiem-soat',    folder: 'kiem-soat',    name: 'Kỹ năng kiểm soát rủi ro và vệ sinh trong cơ sở thẩm mỹ', enabled: true, teacher: 'Phượng', avatar: 'phuong-vesinhthammy.jpg' },
  { id: 'su-pham',      folder: 'su-pham',      name: 'Kỹ năng sư phạm dạy nghề',                              enabled: false,  teacher: 'Trúc',   avatar: 'truc-supham.jpg' },
  { id: 'nail',         folder: 'nail',         name: 'Kỹ thuật chăm sóc móng nghệ thuật',                     enabled: true,  teacher: 'Vân',    avatar: 'van-nail.jpg' },
  { id: 'xoa-bop',      folder: 'xoa-bop',      name: 'Kỹ thuật xoa bóp toàn thân',                           enabled: true,  teacher: 'Trang',  avatar: 'trang-xoabop.jpg' },
  { id: 'nauan-thuanchay', folder: 'nauan-thuanchay', name: 'Nấu ăn thuần chay',                              enabled: false,  teacher: 'Tâm',    avatar: 'tam-thuanchay.jpg' },
  { id: 'noi-mi',       folder: 'noi-mi',       name: 'Nối mi nghệ thuật',                                    enabled: true,  teacher: 'Thuý',   avatar: 'thuy-noimi.jpg' },
  { id: 'my-pham',      folder: 'my-pham',      name: 'Quản lý mỹ phẩm',                                      enabled: true,  teacher: 'Ngọc',   avatar: 'ngoc-mypham.jpg' },
  { id: 'tao-mau-toc',  folder: 'tao-mau-toc',  name: 'Thiết kế tạo mẫu tóc',                                 enabled: true,  teacher: 'Hương',  avatar: 'huong-taomautoc.jpg' },
  { id: 'trang-diem',   folder: 'trang-diem',   name: 'Trang điểm nghệ thuật',                                enabled: true,  teacher: 'Diễm',   avatar: 'diem-trangdiem.jpg' },
  { id: 'dinh-duong',   folder: 'dinh-duong',   name: 'Tư vấn dinh dưỡng cộng đồng',                          enabled: true,  teacher: 'Thanh',  avatar: 'thanh-dinhduong.jpg' },
  { id: 'anh-sang',     folder: 'anh-sang',     name: 'Ứng dụng ánh sáng sinh học trong chăm sóc da',         enabled: true,  teacher: 'Lan',    avatar: 'lan-anhsangsinhhoc.jpg' },
  { id: 'tb-duong-sinh',folder: 'tb-duong-sinh',name: 'Ứng dụng thiết bị công nghệ cao trong Dưỡng sinh',      enabled: true,  teacher: 'Lê',     avatar: 'le-tbduongsinh.jpg' },
  { id: 'tb-sac-dep',   folder: 'tb-sac-dep',   name: 'Ứng dụng thiết bị công nghệ cao trong sắc đẹp',         enabled: true,  teacher: 'Mỹ',     avatar: 'my-thietbisacdep.jpg' },
  { id: 'xam-phun',     folder: 'xam-phun',     name: 'Xăm – Phun thêu thẩm mỹ ngoài da',                     enabled: true,  teacher: 'Dung',   avatar: 'dung-phunxam.jpg' },
  { id: 'xoa-bop-ds',   folder: 'xoa-bop-ds',   name: 'Xoa bóp dưỡng sinh',                                   enabled: true,  teacher: 'Hà',     avatar: 'ha-xoabopduongsinh.jpg' }
];