// src/pages/MarxismPhilosophyPage/data.ts
// ✅ Import ảnh nội bộ (Vite/CRA đều hỗ trợ). Lưu ý: path tương đối từ file này.
import Home2 from "../../assets/picture/Home2.png";
import sophie0 from "../../assets/picture/Sophie 0.png";
import sophie1 from "../../assets/picture/Sophie 1.png";
import sophie2 from "../../assets/picture/Sophie 2.png";
import sophie3 from "../../assets/picture/Sophie 3.png";
import sophie4 from "../../assets/picture/Sophie 4.png";
import sophie5 from "../../assets/picture/Sophie 5.png";

const sections = [
  // 0) HOME
  {
   
  title: "Trang đầu",
  subtitle: "V.I. Lênin • Tư duy cách mạng & lối vào Thế giới của Sophie",
  description:
    "Bắt đầu từ những luận điểm cốt lõi của Lênin về nhận thức, thực tiễn và vai trò của lý luận trong cách mạng — trình bày bằng trải nghiệm đọc tương tác. Từ nền tảng đó, hành trình sẽ bắc cầu sang “Thế giới của Sophie”, nơi ta đối thoại với lịch sử triết học phương Tây.",
  quote: "Không có lý luận cách mạng thì cũng không thể có phong trào cách mạng.",
  author: "V.I. Lênin",
  backgroundImage: Home2, // TODO: thay bằng ảnh bìa/ảnh minh họa Lênin của bạn
  hint: "Nhấn Space/PageDown để khởi hành từ Lênin và gặp Sophie."
},

  

  // 1) GIỚI THIỆU CÂU CHUYỆN
  {
    title: "Giới thiệu câu chuyện",
    subtitle: "Khung tóm lược • Cách theo dõi",
    description:
      "Nội dung dựa theo mạch tiểu thuyết ‘Thế giới của Sophie’ của Jostein Gaarder: từ lá thư bí ẩn mở ra câu hỏi triết học, qua Hy Lạp cổ đại, Trung Cổ – Phục Hưng, đến bước ngoặt Berkeley và lớp meta ‘nhân vật trong sách’. Bạn sẽ đi qua 5 chặng chính, mỗi chặng nhấn vào một điểm tựa khái niệm và bối cảnh câu chuyện.",
    quote:
      "Phẩm chất quan trọng nhất của một nhà triết học là khả năng ngạc nhiên.",
    author: "Jostein Gaarder",
    backgroundImage: sophie0,
    hint: "Kéo xuống để vào phần 1: Bí ẩn mở đầu.",
  },

  // 2) BÍ ẨN MỞ ĐẦU
  {
    title: "Bí ẩn mở đầu",
    subtitle: "Hai câu hỏi mở cánh cửa triết học",
    description:
      "Sophie Amundsen bất chợt nhận các bức thư vô danh với hai câu hỏi nền tảng: “Bạn là ai?” và “Thế giới từ đâu ra?”. Từ đây, đời sống thường nhật rạn nứt, nhường chỗ cho sự kinh ngạc – phẩm chất khai sinh triết học. Một khóa học triết học qua thư bắt đầu, với ẩn dụ ‘con thỏ trắng’ nhắc ta leo lên sợi lông tơ để nhìn thẳng vào điều kỳ diệu.",
    quote: "Phẩm chất quan trọng nhất của một nhà triết học là khả năng ngạc nhiên.",
    author: "Jostein Gaarder",
    backgroundImage: sophie1,
    hint: "Bắt đầu hành trình: Kéo xuống hoặc nhấn Space/PageDown.",
  },

  // 3) HY LẠP CỔ ĐẠI
  {
    title: "Hành trình Hy Lạp cổ đại",
    subtitle: "Từ thần thoại đến lý tính",
    description:
      "Các triết gia tự nhiên truy tìm ‘chất cơ bản’ tạo nên vạn vật (Thales, Parmenides, Heraclitus, Democritus). Ở Athens: Socrates khơi mở tự tri qua đối thoại; Plato nói về thế giới ý niệm; Aristotle đặt nền logic và phân loại tri thức. Con người học cách giải thích tự nhiên bằng lý do tự nhiên – bước ngoặt của tư duy.",
    quote: "Không ai bước hai lần trên cùng một dòng sông.",
    author: "Heraclitus",
    backgroundImage: sophie2,
    hint: "Quan sát bước ngoặt: thần thoại → lý tính (tiền-Socrates → Athens).",
  },

  // 4) HY LẠP HÓA → PHỤC HƯNG
  {
    title: "Từ Hy Lạp hóa đến Phục Hưng",
    subtitle: "Hạnh phúc, đức tin & sự tái sinh tri thức",
    description:
      "Hy Lạp hóa: đi tìm an nhiên (Khắc kỷ) hay vui hưởng có chừng mực (Hưởng lạc). Trung Cổ: tổng hợp đức tin–lý trí (Augustine ‘Kitô hóa’ Plato; Aquinas ‘Kitô hóa’ Aristotle). Phục Hưng và khoa học thực nghiệm khai phóng thế giới quan: từ Copernicus tới Newton, vũ trụ dần hiện ra bằng toán học và đo lường.",
    quote: "Vũ trụ được viết bằng ngôn ngữ toán học.",
    author: "Galileo Galilei",
    backgroundImage: sophie3,
    hint: "Để ý chuỗi: Hy Lạp hóa → Trung Cổ → Phục Hưng & khoa học.",
  },

  // 5) BERKELEY & META-TRUYỆN
  {
    title: "Những can thiệp kỳ lạ",
    subtitle: "Berkeley & sự thật phơi bày",
    description:
      "Khi các dấu hiệu siêu thực tràn vào đời Sophie (khăn lụa tên Hilde, chú chó ‘chúc mừng sinh nhật’…), Alberto gợi luận đề của Berkeley: ‘Esse est percipi’ – tồn tại là được tri giác. Sự thật hé lộ: Sophie và Alberto là nhân vật trong cuốn sách cha của Hilde đang viết. Tinh thần tác giả là ‘Chúa’ của thế giới ấy.",
    quote: "Esse est percipi — Tồn tại là được tri giác.",
    author: "George Berkeley",
    backgroundImage: sophie4,
    hint: "Đọc kỹ twist Berkeley: ranh giới chủ thể–khách thể & siêu hư cấu.",
  },

  // 6) LỐI THOÁT & LỜI MỜI
  {
    title: "Lối thoát & lời mời",
    subtitle: "Khi câu chuyện bước ra khỏi trang sách",
    description:
      "Trước ngày Hội Mùa Hè, Sophie và Alberto nỗ lực ‘thoát truyện’. Hành trình khép lại bằng một mở ra: tiếp tục đặt câu hỏi, tiếp tục ngạc nhiên – đó là cách triết học sống cùng chúng ta, ở mỗi quyết định và cách ta nhìn thế giới.",
    quote: "Triết học bắt đầu bằng sự kinh ngạc.",
    author: "Aristotle",
    backgroundImage: sophie5,
    hint: "Kết thúc mở: nhấn “Khám phá học thuyết sâu hơn” để vào StoryBook.",
  },
];

export default sections;
