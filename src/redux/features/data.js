// src/data/chapter3.dataset.js
// Phiên bản đã chuẩn hoá chủ đề & xoá viết tắt

export const DATASET_VERSION = 9;

/**
 * Quy ước:
 * - Mỗi chương có id riêng; trong mỗi chương, câu hỏi đánh số từ 1.
 * - Không dùng viết tắt (ví dụ: TTXH → "tồn tại xã hội"; YTXH → "ý thức xã hội";
 *   LLSX → "lực lượng sản xuất"; QHSX → "quan hệ sản xuất";
 *   CSHT → "cơ sở hạ tầng (kinh tế)"; KTTT → "kiến trúc thượng tầng";
 *   KT–XH → "kinh tế – xã hội"; TLSX → "tư liệu sản xuất").
 */

export const chapters = [
  /* =========================================================
   * Chương 1 — Tồn tại xã hội & Ý thức xã hội (cơ sở và quan hệ)
   * Nền tảng khái niệm, cấu trúc, thuộc tính và quan hệ biện chứng.
   * ========================================================= */
  {
    id: 31001,
    title: "Tồn tại xã hội & Ý thức xã hội (cơ sở và quan hệ)",
    description:
      "Khái niệm nền tảng, kết cấu, các thuộc tính và quan hệ biện chứng giữa tồn tại xã hội và ý thức xã hội; các vận dụng điển hình.",
    icon: "🧩",
    questions: [
      // 1
      {
        id: 1,
        term: "Tồn tại xã hội",
        definition:
          "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
        quiz: {
          question: "Theo chủ nghĩa duy vật lịch sử, “tồn tại xã hội” là gì?",
          options: [
            "Toàn bộ đời sống tinh thần của xã hội.",
            "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
            "Tổng thể hệ thống chính trị của xã hội.",
            "Những thành tựu văn hoá – nghệ thuật.",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
        answer: "Tồn tại xã hội",
        fullFillAnswer:
          "Tồn tại xã hội là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
      },
      // 2
      {
        id: 2,
        term: "Các yếu tố cơ bản của tồn tại xã hội",
        definition:
          "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
        quiz: {
          question: "Ba yếu tố cơ bản cấu thành tồn tại xã hội là gì?",
          options: [
            "Phương thức sản xuất, nhà nước và giai cấp.",
            "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng.",
            "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
            "Môi trường tự nhiên, dân số và hệ thống chính trị.",
          ],
          correct: 2,
        },
        fillAnswer: "Ba yếu tố cơ bản của tồn tại xã hội: ___.",
        answer:
          "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất",
        fullFillAnswer:
          "Tồn tại xã hội bao gồm: hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
      },
      // 3
      {
        id: 3,
        term: "Yếu tố quyết định nhất của tồn tại xã hội",
        definition:
          "Phương thức sản xuất của cải vật chất giữ vai trò quyết định nhất.",
        quiz: {
          question:
            "Trong các yếu tố của tồn tại xã hội, yếu tố nào giữ vai trò quyết định nhất?",
          options: [
            "Hoàn cảnh địa lý và điều kiện tự nhiên.",
            "Yếu tố dân cư và mật độ dân số.",
            "Phương thức sản xuất của cải vật chất.",
            "Các yếu tố đều quan trọng như nhau.",
          ],
          correct: 2,
        },
        fillAnswer: "Yếu tố quyết định nhất của tồn tại xã hội là ___.",
        answer: "Phương thức sản xuất của cải vật chất",
        fullFillAnswer:
          "Trong tồn tại xã hội, phương thức sản xuất của cải vật chất giữ vai trò quyết định nhất.",
      },
      // 4
      {
        id: 4,
        term: "Ý thức xã hội",
        definition:
          "Phương diện sinh hoạt tinh thần của xã hội, nảy sinh từ và phản ánh tồn tại xã hội.",
        quiz: {
          question: "Ý thức xã hội được hiểu là gì?",
          options: [
            "Toàn bộ đời sống vật chất của xã hội.",
            "Phương diện sinh hoạt tinh thần của xã hội, nảy sinh từ và phản ánh tồn tại xã hội.",
            "Ý thức của từng cá nhân.",
            "Hệ thống cơ quan công quyền.",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là phương diện sinh hoạt tinh thần của xã hội, nảy sinh từ và phản ánh tồn tại xã hội.",
        answer: "Ý thức xã hội",
        fullFillAnswer:
          "Ý thức xã hội là phương diện sinh hoạt tinh thần của xã hội, nảy sinh từ và phản ánh tồn tại xã hội.",
      },
      // 5
      {
        id: 5,
        term: "Kết cấu của ý thức xã hội",
        definition: "Gồm hai cấp độ: tâm lý xã hội và hệ tư tưởng xã hội.",
        quiz: {
          question: "Kết cấu của ý thức xã hội gồm những cấp độ nào?",
          options: [
            "Ý thức cá nhân và ý thức tập thể.",
            "Tâm lý xã hội và hệ tư tưởng xã hội.",
            "Ý thức thông thường và ý thức lý luận.",
            "Ý thức khoa học và ý thức phi khoa học.",
          ],
          correct: 1,
        },
        fillAnswer: "Hai cấp độ trong kết cấu ý thức xã hội: ___ và ___.",
        answer: "Tâm lý xã hội và hệ tư tưởng xã hội",
        fullFillAnswer:
          "Kết cấu ý thức xã hội gồm hai cấp độ: tâm lý xã hội và hệ tư tưởng xã hội.",
      },
      // 6
      {
        id: 6,
        term: "Hình thái ý thức xã hội (loại trừ)",
        definition:
          "“Ý thức sản xuất” không phải là một hình thái của ý thức xã hội.",
        quiz: {
          question: "Đâu KHÔNG phải là một hình thái của ý thức xã hội?",
          options: [
            "Ý thức chính trị.",
            "Ý thức đạo đức.",
            "Ý thức sản xuất.",
            "Ý thức nghệ thuật.",
          ],
          correct: 2,
        },
        fillAnswer: "___ không phải là một hình thái của ý thức xã hội.",
        answer: "Ý thức sản xuất",
        fullFillAnswer:
          "Trong các hình thái ý thức xã hội, “ý thức sản xuất” không phải là một hình thái.",
      },
      // 7
      {
        id: 7,
        term: "Quan hệ giữa tồn tại xã hội và ý thức xã hội",
        definition:
          "Tồn tại xã hội quyết định ý thức xã hội; ý thức xã hội có tính độc lập tương đối và tác động trở lại tồn tại xã hội.",
        quiz: {
          question:
            "Luận điểm nào thể hiện đúng nhất mối quan hệ giữa tồn tại xã hội và ý thức xã hội?",
          options: [
            "Ý thức xã hội quyết định tồn tại xã hội.",
            "Hai mặt này tồn tại độc lập, không liên quan.",
            "Tồn tại xã hội quyết định ý thức xã hội, đồng thời ý thức xã hội có tính độc lập tương đối và tác động trở lại tồn tại xã hội.",
            "Chúng quyết định lẫn nhau ngang bằng.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Mối quan hệ: ___ quyết định ___; ___ có tính độc lập tương đối và tác động trở lại ___.",
        answer:
          "Tồn tại xã hội quyết định ý thức xã hội; ý thức xã hội tác động trở lại tồn tại xã hội",
        fullFillAnswer:
          "Tồn tại xã hội quyết định ý thức xã hội; ý thức xã hội có tính độc lập tương đối và tác động trở lại tồn tại xã hội.",
      },
      // 8
      {
        id: 8,
        term: "Tính giai cấp của ý thức xã hội",
        definition:
          "Trong xã hội có giai cấp, do tồn tại xã hội và lợi ích khác nhau (thậm chí đối lập), ý thức xã hội mang tính giai cấp.",
        quiz: {
          question:
            "Vì sao trong xã hội có giai cấp, ý thức xã hội lại mang tính giai cấp?",
          options: [
            "Vì mỗi giai cấp có trình độ nhận thức khác nhau.",
            "Vì tồn tại xã hội của các giai cấp khác nhau, lợi ích giai cấp đối lập nhau.",
            "Vì giai cấp thống trị áp đặt tư tưởng bằng bạo lực.",
            "Vì thói quen truyền thống khác nhau.",
          ],
          correct: 1,
        },
        fillAnswer: "Ý thức xã hội mang tính giai cấp vì ___.",
        answer: "Tồn tại xã hội khác nhau và lợi ích giai cấp đối lập nhau",
        fullFillAnswer:
          "Ý thức xã hội mang tính giai cấp vì tồn tại xã hội khác nhau và lợi ích giai cấp đối lập nhau.",
      },
      // 9
      {
        id: 9,
        term: "Tính lạc hậu của ý thức xã hội",
        definition:
          "Một số phong tục, tập quán cũ không còn phù hợp vẫn tồn tại trong đời sống hiện đại.",
        quiz: {
          question:
            "Biểu hiện nào thể hiện rõ tính lạc hậu của ý thức xã hội so với tồn tại xã hội?",
          options: [
            "Một phát minh khoa học đi trước thời đại.",
            "Phong tục, tập quán cũ lạc hậu vẫn tồn tại trong đời sống hiện đại.",
            "Tác phẩm nghệ thuật phản ánh chân thực đời sống.",
            "Lý luận chính trị mới đáp ứng thực tiễn.",
          ],
          correct: 1,
        },
        fillAnswer: "Tính lạc hậu của ý thức xã hội: ___.",
        answer:
          "Phong tục, tập quán lạc hậu vẫn tồn tại trong đời sống hiện đại",
        fullFillAnswer:
          "Tính lạc hậu của ý thức xã hội thể hiện khi phong tục, tập quán cũ vẫn tồn tại trong đời sống hiện đại.",
      },
      // 10
      {
        id: 10,
        term: "Tính vượt trước của ý thức xã hội",
        definition:
          "Khi phản ánh đúng bản chất và có cơ sở khoa học, ý thức xã hội có thể dự báo, đi trước tồn tại xã hội.",
        quiz: {
          question: "Ý thức xã hội có thể vượt trước tồn tại xã hội khi nào?",
          options: [
            "Khi phản ánh đúng đắn các mối liên hệ bản chất và có cơ sở khoa học.",
            "Khi là ý chí chủ quan của một vĩ nhân.",
            "Khi phản ánh hư ảo, hoang đường.",
            "Khi lặp lại tư tưởng quá khứ.",
          ],
          correct: 0,
        },
        fillAnswer:
          "Ý thức xã hội vượt trước tồn tại xã hội khi nó có cơ sở khoa học và ___.",
        answer: "Phản ánh đúng đắn các mối liên hệ bản chất, tất yếu",
        fullFillAnswer:
          "Ý thức xã hội vượt trước tồn tại xã hội nếu phản ánh đúng bản chất và có cơ sở khoa học.",
      },
      // 11
      {
        id: 11,
        term: "Tính kế thừa của ý thức xã hội",
        definition:
          "Giai đoạn sau kế thừa có chọn lọc các giá trị của giai đoạn trước để phát triển.",
        quiz: {
          question:
            "“Tính kế thừa” trong sự phát triển của ý thức xã hội có nghĩa là gì?",
          options: [
            "Sao chép hoàn toàn tư tưởng trước.",
            "Phủ định sạch trơn tư tưởng trước.",
            "Kế thừa có chọn lọc các giá trị trước để phát triển.",
            "Các hình thái ý thức phát triển độc lập.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Tính kế thừa: giai đoạn sau ___ các giá trị giai đoạn trước.",
        answer: "Kế thừa có chọn lọc",
        fullFillAnswer:
          "Tính kế thừa nghĩa là kế thừa có chọn lọc các giá trị của giai đoạn trước.",
      },
      // 12
      {
        id: 12,
        term: "Sự tác động trở lại của ý thức xã hội",
        definition:
          "Ý thức xã hội có thể thúc đẩy hoặc kìm hãm tồn tại xã hội tùy tính chất tiến bộ hay lạc hậu.",
        quiz: {
          question:
            "Sự tác động trở lại của ý thức xã hội đối với tồn tại xã hội được thể hiện thế nào?",
          options: [
            "Luôn luôn thúc đẩy tồn tại xã hội.",
            "Luôn luôn kìm hãm tồn tại xã hội.",
            "Không có khả năng tác động.",
            "Có thể thúc đẩy hoặc kìm hãm tùy tính chất tiến bộ hay lạc hậu.",
          ],
          correct: 3,
        },
        fillAnswer:
          "Ý thức xã hội có thể ___ hoặc ___ tồn tại xã hội tùy tính chất của nó.",
        answer: "Thúc đẩy hoặc kìm hãm",
        fullFillAnswer:
          "Ý thức xã hội có thể thúc đẩy hoặc kìm hãm tồn tại xã hội tùy tính chất tiến bộ hay lạc hậu.",
      },
      // 13
      {
        id: 13,
        term: "Phân biệt tâm lý xã hội và hệ tư tưởng xã hội",
        definition:
          "Tâm lý xã hội: phản ánh trực tiếp, tự phát; Hệ tư tưởng xã hội: phản ánh gián tiếp, có hệ thống.",
        quiz: {
          question:
            "Sự khác biệt cơ bản giữa tâm lý xã hội và hệ tư tưởng xã hội là gì?",
          options: [
            "Tâm lý xã hội mang tính lý luận, hệ tư tưởng tự phát.",
            "Tâm lý xã hội phản ánh trực tiếp, tự phát; hệ tư tưởng xã hội phản ánh gián tiếp, có hệ thống.",
            "Tâm lý xã hội chỉ ở giai cấp bị trị; hệ tư tưởng chỉ ở giai cấp thống trị.",
            "Tâm lý xã hội không thay đổi; hệ tư tưởng luôn thay đổi.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Tâm lý xã hội: phản ánh ___, ___; Hệ tư tưởng xã hội: phản ánh ___, ___.",
        answer: "Trực tiếp, tự phát; gián tiếp, có hệ thống",
        fullFillAnswer:
          "Khác biệt: tâm lý xã hội phản ánh trực tiếp, tự phát; hệ tư tưởng xã hội phản ánh gián tiếp, có hệ thống.",
      },
      // 14
      {
        id: 14,
        term: "Kinh tế quyết định chính trị",
        definition:
          "Một cách diễn đạt vai trò quyết định của tồn tại xã hội (đặc biệt là phương thức sản xuất) đối với ý thức xã hội và thượng tầng chính trị.",
        quiz: {
          question:
            "Câu “Kinh tế quyết định chính trị” nhấn mạnh nội dung cốt lõi nào?",
          options: [
            "Vai trò của đấu tranh giai cấp trong lịch sử.",
            "Vai trò quyết định của tồn tại xã hội đối với ý thức xã hội.",
            "Quan hệ biện chứng giữa lực lượng sản xuất và quan hệ sản xuất.",
            "Tính độc lập tuyệt đối của ý thức xã hội.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Kinh tế quyết định chính trị → vai trò quyết định của ___ đối với ___.",
        answer: "Tồn tại xã hội đối với ý thức xã hội",
        fullFillAnswer:
          "Phát biểu này nhấn mạnh vai trò quyết định của tồn tại xã hội đối với ý thức xã hội.",
      },
      // 15
      {
        id: 15,
        term: "Không giản lược đạo đức vào kinh tế",
        definition:
          "Sai khi cho rằng chỉ cần kinh tế phát triển thì tự khắc đạo đức được giải quyết; vì ý thức xã hội có tính độc lập tương đối và có thể tác động tiêu cực nếu lạc hậu.",
        quiz: {
          question:
            "Luận điểm “Kinh tế phát triển thì tự khắc vấn đề đạo đức sẽ được giải quyết” là đúng hay sai?",
          options: [
            "Đúng, vì tồn tại xã hội quyết định hoàn toàn ý thức xã hội.",
            "Sai, vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của ý thức xã hội lạc hậu.",
            "Đúng, vì đạo đức là một bộ phận của kinh tế.",
            "Sai, vì đạo đức không liên quan đến kinh tế.",
          ],
          correct: 1,
        },
        fillAnswer: "Đáp án đúng: ___.",
        answer:
          "Sai, vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của ý thức xã hội lạc hậu",
        fullFillAnswer:
          "Sai: vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của ý thức xã hội lạc hậu.",
      },
      // 16
      {
        id: 16,
        term: "Cách mạng công nghiệp 4.0 và tác động xã hội",
        definition:
          "Thay đổi phương thức sản xuất (tồn tại xã hội) kéo theo biến đổi đời sống tinh thần (ý thức xã hội).",
        quiz: {
          question:
            "Cách mạng công nghiệp 4.0 là sự thay đổi của yếu tố nào và sẽ tác động đến yếu tố nào?",
          options: [
            "Thay đổi ý thức xã hội → tác động đến tồn tại xã hội.",
            "Thay đổi phương thức sản xuất (tồn tại xã hội) → biến đổi trong ý thức xã hội.",
            "Thay đổi điều kiện tự nhiên → tác động đến dân số.",
            "Thay đổi kiến trúc thượng tầng → tác động đến cơ sở hạ tầng (kinh tế).",
          ],
          correct: 1,
        },
        fillAnswer:
          "Cách mạng 4.0 → thay đổi trong ___, kéo theo biến đổi trong ___.",
        answer: "Phương thức sản xuất (tồn tại xã hội); ý thức xã hội",
        fullFillAnswer:
          "Cách mạng công nghiệp 4.0 làm thay đổi phương thức sản xuất, kéo theo biến đổi trong ý thức xã hội.",
      },
    ],
  },

  /* =========================================================
   * Chương 2 — Học thuyết hình thái kinh tế – xã hội
   * Phương thức sản xuất; lực lượng sản xuất – quan hệ sản xuất;
   * cơ sở hạ tầng (kinh tế) – kiến trúc thượng tầng; quy luật phù hợp.
   * ========================================================= */
  {
    id: 31002,
    title: "Học thuyết hình thái kinh tế – xã hội",
    description:
      "Phương thức sản xuất; lực lượng sản xuất và quan hệ sản xuất; cơ sở hạ tầng (kinh tế) – kiến trúc thượng tầng; quy luật phù hợp trong phát triển xã hội.",
    icon: "🏛️",
    questions: [
      // 1
      {
        id: 1,
        term: "Nền tảng phát triển xã hội",
        definition: "Sản xuất vật chất.",
        quiz: {
          question:
            "Yếu tố nào là nền tảng của mọi hoạt động xã hội và quyết định sự phát triển của xã hội?",
          options: [
            "Sản xuất tinh thần",
            "Sản xuất vật chất",
            "Hoạt động chính trị",
            "Giao lưu văn hoá",
          ],
          correct: 1,
        },
        fillAnswer: "Nền tảng của mọi hoạt động xã hội là ___.",
        answer: "Sản xuất vật chất",
        fullFillAnswer: "Nền tảng phát triển xã hội là sản xuất vật chất.",
      },
      // 2
      {
        id: 2,
        term: "Khái niệm phương thức sản xuất",
        definition:
          "Cách con người tác động vào tự nhiên để tạo ra của cải vật chất.",
        quiz: {
          question: "Phương thức sản xuất là gì?",
          options: [
            "Cách sản xuất tinh thần",
            "Cách con người tác động vào tự nhiên để tạo ra của cải vật chất",
            "Cách tổ chức đời sống xã hội",
            "Cách giao tiếp và trao đổi kinh nghiệm",
          ],
          correct: 1,
        },
        fillAnswer: "Phương thức sản xuất là ___.",
        answer:
          "Cách con người tác động vào tự nhiên để tạo ra của cải vật chất",
        fullFillAnswer:
          "Phương thức sản xuất là cách con người tác động vào tự nhiên để tạo ra của cải vật chất.",
      },
      // 3
      {
        id: 3,
        term: "Cấu thành phương thức sản xuất",
        definition: "Lực lượng sản xuất và quan hệ sản xuất.",
        quiz: {
          question:
            "Phương thức sản xuất được cấu thành từ hai yếu tố cơ bản nào?",
          options: [
            "Người lao động và công cụ",
            "Lực lượng sản xuất và quan hệ sản xuất",
            "Cơ sở hạ tầng (kinh tế) và kiến trúc thượng tầng",
            "Tồn tại xã hội và ý thức xã hội",
          ],
          correct: 1,
        },
        fillAnswer: "Phương thức sản xuất được cấu thành bởi ___ và ___.",
        answer: "Lực lượng sản xuất và quan hệ sản xuất",
        fullFillAnswer:
          "Phương thức sản xuất = Lực lượng sản xuất và quan hệ sản xuất.",
      },
      // 4
      {
        id: 4,
        term: "Bản chất lực lượng sản xuất",
        definition:
          "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất.",
        quiz: {
          question: "Lực lượng sản xuất biểu hiện mối quan hệ nào?",
          options: [
            "Quan hệ giữa người với người trong sản xuất",
            "Quan hệ giữa con người với tự nhiên trong sản xuất",
            "Quan hệ giai cấp",
            "Quan hệ nhà nước – công dân",
          ],
          correct: 1,
        },
        fillAnswer:
          "Lực lượng sản xuất biểu hiện quan hệ giữa con người với ___ trong quá trình sản xuất.",
        answer: "Tự nhiên",
        fullFillAnswer:
          "Lực lượng sản xuất biểu hiện quan hệ giữa con người với tự nhiên trong quá trình sản xuất.",
      },
      // 5
      {
        id: 5,
        term: "Tư liệu sản xuất",
        definition: "Công cụ lao động và đối tượng lao động.",
        quiz: {
          question: "Yếu tố nào sau đây thuộc về tư liệu sản xuất?",
          options: [
            "Kinh nghiệm, kỹ năng",
            "Sức khoẻ, thể lực",
            "Công cụ lao động và đối tượng lao động",
            "Tri thức khoa học",
          ],
          correct: 2,
        },
        fillAnswer: "Tư liệu sản xuất gồm ___ và ___.",
        answer: "Công cụ lao động và đối tượng lao động",
        fullFillAnswer:
          "Tư liệu sản xuất gồm công cụ lao động và đối tượng lao động.",
      },
      // 6
      {
        id: 6,
        term: "Yếu tố quyết định của lực lượng sản xuất",
        definition: "Người lao động.",
        quiz: {
          question:
            "Trong các yếu tố của lực lượng sản xuất, yếu tố nào được xem là cơ bản và quyết định nhất?",
          options: [
            "Tư liệu sản xuất",
            "Công cụ lao động",
            "Người lao động",
            "Đối tượng lao động",
          ],
          correct: 2,
        },
        fillAnswer:
          "Yếu tố cơ bản và quyết định nhất của lực lượng sản xuất là ___.",
        answer: "Người lao động",
        fullFillAnswer:
          "Yếu tố cơ bản và quyết định nhất của lực lượng sản xuất là người lao động.",
      },
      // 7
      {
        id: 7,
        term: "Yếu tố cách mạng nhất trong lực lượng sản xuất",
        definition:
          "Công cụ lao động (bao gồm cả công nghệ) là yếu tố động và cách mạng nhất, thước đo trình độ chinh phục tự nhiên.",
        quiz: {
          question:
            "Trong lực lượng sản xuất, yếu tố nào động nhất và cách mạng nhất, là thước đo trình độ chinh phục tự nhiên?",
          options: [
            "Người lao động",
            "Đối tượng lao động",
            "Công cụ lao động (bao gồm công nghệ)",
            "Tri thức khoa học",
          ],
          correct: 2,
        },
        fillAnswer:
          "Yếu tố động và cách mạng nhất trong lực lượng sản xuất là ___.",
        answer: "Công cụ lao động (bao gồm công nghệ)",
        fullFillAnswer:
          "Công cụ lao động (bao gồm công nghệ) là yếu tố động nhất và cách mạng nhất trong lực lượng sản xuất.",
      },
      // 8
      {
        id: 8,
        term: "Bản chất quan hệ sản xuất",
        definition:
          "Mối quan hệ giữa người với người trong quá trình sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng).",
        quiz: {
          question:
            "Quan hệ sản xuất là mối quan hệ giữa người với người trong quá trình nào?",
          options: [
            "Giao lưu văn hoá",
            "Đấu tranh chính trị",
            "Sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng)",
            "Hoạt động nghệ thuật",
          ],
          correct: 2,
        },
        fillAnswer:
          "Quan hệ sản xuất là quan hệ giữa người với người trong toàn bộ quá trình ___.",
        answer: "Sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng)",
        fullFillAnswer:
          "Quan hệ sản xuất là quan hệ giữa người với người trong toàn bộ quá trình sản xuất xã hội.",
      },
      // 9
      {
        id: 9,
        term: "Mặt quyết định trong quan hệ sản xuất",
        definition: "Quan hệ sở hữu đối với tư liệu sản xuất.",
        quiz: {
          question:
            "Trong ba mặt của quan hệ sản xuất, mặt nào giữ vai trò quyết định các mặt còn lại?",
          options: [
            "Quan hệ tổ chức và quản lý sản xuất",
            "Quan hệ phân phối sản phẩm",
            "Quan hệ sở hữu đối với tư liệu sản xuất",
            "Quan hệ trao đổi sản phẩm",
          ],
          correct: 2,
        },
        fillAnswer:
          "Trong quan hệ sản xuất, mặt quyết định là quan hệ ___ đối với tư liệu sản xuất.",
        answer: "Sở hữu",
        fullFillAnswer:
          "Trong quan hệ sản xuất, quan hệ sở hữu đối với tư liệu sản xuất giữ vai trò quyết định.",
      },
      // 10
      {
        id: 10,
        term: "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
        definition:
          "Quy luật cơ bản, phổ biến của sự vận động và phát triển xã hội.",
        quiz: {
          question:
            "Quy luật cơ bản, phổ biến của sự vận động và phát triển xã hội là quy luật nào?",
          options: [
            "Quy luật đấu tranh giai cấp",
            "Quy luật tồn tại xã hội quyết định ý thức xã hội",
            "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
            "Quy luật kế thừa",
          ],
          correct: 2,
        },
        fillAnswer: "Quy luật cơ bản: sự phù hợp của ___ với trình độ ___ .",
        answer:
          "Sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
        fullFillAnswer:
          "Quy luật phát triển xã hội cơ bản là sự phù hợp của quan hệ sản xuất với trình độ lực lượng sản xuất.",
      },
      // 11
      {
        id: 11,
        term: "Vai trò của quan hệ sản xuất phù hợp",
        definition:
          "Khi quan hệ sản xuất phù hợp với lực lượng sản xuất, nó thúc đẩy lực lượng sản xuất phát triển.",
        quiz: {
          question:
            "Khi quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất, nó sẽ có vai trò gì?",
          options: [
            "Kìm hãm lực lượng sản xuất",
            "Thúc đẩy lực lượng sản xuất phát triển",
            "Không ảnh hưởng đến lực lượng sản xuất",
            "Phá vỡ lực lượng sản xuất hiện có",
          ],
          correct: 1,
        },
        fillAnswer:
          "Khi quan hệ sản xuất phù hợp với lực lượng sản xuất, nó ___ lực lượng sản xuất.",
        answer: "Thúc đẩy lực lượng sản xuất phát triển",
        fullFillAnswer:
          "Quan hệ sản xuất phù hợp sẽ thúc đẩy lực lượng sản xuất phát triển.",
      },
      // 12
      {
        id: 12,
        term: "Nguyên nhân sâu xa của cách mạng xã hội",
        definition:
          "Mâu thuẫn giữa quan hệ sản xuất đã lỗi thời và lực lượng sản xuất đã phát triển.",
        quiz: {
          question: "Nguyên nhân sâu xa của các cuộc cách mạng xã hội là gì?",
          options: [
            "Mâu thuẫn đảng phái",
            "Mâu thuẫn giữa quan hệ sản xuất lỗi thời và lực lượng sản xuất đã phát triển",
            "Mâu thuẫn giữa các quốc gia, dân tộc",
            "Mâu thuẫn về ý thức hệ",
          ],
          correct: 1,
        },
        fillAnswer:
          "Cách mạng xã hội bắt nguồn từ mâu thuẫn giữa ___ lỗi thời và ___ đã phát triển.",
        answer: "Quan hệ sản xuất lỗi thời và lực lượng sản xuất đã phát triển",
        fullFillAnswer:
          "Nguyên nhân sâu xa của cách mạng xã hội là mâu thuẫn giữa quan hệ sản xuất lỗi thời và lực lượng sản xuất đã phát triển.",
      },
      // 13
      {
        id: 13,
        term: "Cơ sở hạ tầng (kinh tế) của xã hội",
        definition:
          "Toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội.",
        quiz: {
          question: "Cơ sở hạ tầng (kinh tế) của một xã hội là gì?",
          options: [
            "Toàn bộ các quan điểm, tư tưởng xã hội",
            "Toàn bộ các thiết chế chính trị – xã hội",
            "Toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
            "Toàn bộ các công trình vật chất kỹ thuật",
          ],
          correct: 2,
        },
        fillAnswer:
          "Cơ sở hạ tầng (kinh tế) là toàn bộ các ___ hợp thành cơ cấu kinh tế của xã hội.",
        answer: "Quan hệ sản xuất",
        fullFillAnswer:
          "Cơ sở hạ tầng (kinh tế) là toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội.",
      },
      // 14
      {
        id: 14,
        term: "Kiến trúc thượng tầng",
        definition:
          "Toàn bộ các quan điểm và các thiết chế chính trị – xã hội tương ứng, hình thành trên một cơ sở hạ tầng (kinh tế) nhất định.",
        quiz: {
          question: "Kiến trúc thượng tầng là gì?",
          options: [
            "Toàn bộ các quan hệ sản xuất của xã hội",
            "Toàn bộ sinh hoạt vật chất của xã hội",
            "Toàn bộ các quan điểm và thiết chế chính trị – xã hội tương ứng, được hình thành trên một cơ sở hạ tầng (kinh tế) nhất định",
            "Trình độ phát triển của lực lượng sản xuất",
          ],
          correct: 2,
        },
        fillAnswer:
          "Kiến trúc thượng tầng là toàn bộ các quan điểm và các thiết chế ___ – ___ hình thành trên cơ sở hạ tầng (kinh tế) nhất định.",
        answer: "Chính trị – xã hội",
        fullFillAnswer:
          "Kiến trúc thượng tầng là các quan điểm và thiết chế chính trị – xã hội hình thành trên một cơ sở hạ tầng (kinh tế) nhất định.",
      },
      // 15
      {
        id: 15,
        term: "Quan hệ cơ sở hạ tầng (kinh tế) – kiến trúc thượng tầng",
        definition: "Cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng.",
        quiz: {
          question:
            "Trong mối quan hệ giữa cơ sở hạ tầng (kinh tế) và kiến trúc thượng tầng, yếu tố nào giữ vai trò quyết định?",
          options: [
            "Kiến trúc thượng tầng quyết định cơ sở hạ tầng (kinh tế)",
            "Cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng",
            "Không có quan hệ với nhau",
            "Quyết định lẫn nhau ngang bằng",
          ],
          correct: 1,
        },
        fillAnswer:
          "Trong quan hệ cơ sở hạ tầng (kinh tế) – kiến trúc thượng tầng, ___ quyết định ___.",
        answer: "Cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng",
        fullFillAnswer:
          "Trong quan hệ cơ sở hạ tầng (kinh tế) – kiến trúc thượng tầng, cơ sở hạ tầng (kinh tế) giữ vai trò quyết định.",
      },
      // 16
      {
        id: 16,
        term: "Yếu tố kiến trúc thượng tầng tác động mạnh nhất đến cơ sở hạ tầng (kinh tế)",
        definition: "Nhà nước.",
        quiz: {
          question:
            "Yếu tố nào trong kiến trúc thượng tầng có vai trò tác động trực tiếp và mạnh mẽ nhất tới cơ sở hạ tầng (kinh tế)?",
          options: ["Nhà nước", "Tôn giáo", "Nghệ thuật", "Đạo đức"],
          correct: 0,
        },
        fillAnswer:
          "Trong kiến trúc thượng tầng, yếu tố tác động trực tiếp và mạnh nhất đến cơ sở hạ tầng (kinh tế) là ___.",
        answer: "Nhà nước",
        fullFillAnswer:
          "Trong kiến trúc thượng tầng, nhà nước tác động trực tiếp và mạnh nhất tới cơ sở hạ tầng (kinh tế).",
      },
      // 17
      {
        id: 17,
        term: "Hệ quả đổi thay cơ sở hạ tầng (kinh tế)",
        definition:
          "Biểu hiện tính quyết định của cơ sở hạ tầng (kinh tế) đối với kiến trúc thượng tầng.",
        quiz: {
          question:
            "Sự thay đổi của cơ sở hạ tầng (kinh tế) sẽ dẫn đến sự thay đổi của kiến trúc thượng tầng. Đây là tính chất gì của mối quan hệ?",
          options: [
            "Tính độc lập tương đối của kiến trúc thượng tầng",
            "Tính quyết định của cơ sở hạ tầng (kinh tế)",
            "Tính tác động trở lại của kiến trúc thượng tầng",
            "Tính kế thừa của kiến trúc thượng tầng",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự đổi thay kiến trúc thượng tầng do cơ sở hạ tầng (kinh tế) thay đổi thể hiện tính ___ của ___.",
        answer: "Tính quyết định của cơ sở hạ tầng (kinh tế)",
        fullFillAnswer:
          "Cơ sở hạ tầng (kinh tế) thay đổi kéo theo kiến trúc thượng tầng thay đổi – biểu hiện tính quyết định của cơ sở hạ tầng (kinh tế).",
      },
      // 18
      {
        id: 18,
        term: "Tính lịch sử – tự nhiên của phát triển xã hội",
        definition:
          "Sự phát triển của các hình thái kinh tế – xã hội là một quá trình lịch sử – tự nhiên.",
        quiz: {
          question:
            "Theo chủ nghĩa Mác – Lênin, sự phát triển của các hình thái kinh tế – xã hội là:",
          options: [
            "Một quá trình hoàn toàn ngẫu nhiên",
            "Một quá trình lịch sử – tự nhiên",
            "Một quá trình do ý chí của các vĩ nhân quyết định",
            "Một quá trình tuần hoàn, lặp đi lặp lại",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự phát triển các hình thái kinh tế – xã hội là một quá trình ___ – ___.",
        answer: "Lịch sử – tự nhiên",
        fullFillAnswer:
          "Các hình thái kinh tế – xã hội phát triển theo quá trình lịch sử – tự nhiên.",
      },
      // 19
      {
        id: 19,
        term: "Các hình thái kinh tế – xã hội trong lịch sử (loại trừ)",
        definition:
          "“Toàn cầu hoá” không phải là một hình thái kinh tế – xã hội lịch sử.",
        quiz: {
          question:
            "Đâu không phải là một trong những hình thái kinh tế – xã hội đã tồn tại trong lịch sử?",
          options: [
            "Cộng sản nguyên thuỷ",
            "Chiếm hữu nô lệ",
            "Tư bản chủ nghĩa",
            "Toàn cầu hoá",
          ],
          correct: 3,
        },
        fillAnswer: "___ không phải là một hình thái kinh tế – xã hội lịch sử.",
        answer: "Toàn cầu hoá",
        fullFillAnswer:
          "Toàn cầu hoá không phải là một hình thái kinh tế – xã hội lịch sử.",
      },
      // 20
      {
        id: 20,
        term: "Giá trị học thuyết hình thái kinh tế – xã hội",
        definition:
          "Cả ba khía cạnh đều đúng: phương pháp luận khoa học; chỉ ra động lực; khẳng định quy luật khách quan.",
        quiz: {
          question:
            "“Giá trị của học thuyết hình thái kinh tế – xã hội” là gì?",
          options: [
            "Cung cấp phương pháp luận khoa học để phân tích, lý giải lịch sử xã hội",
            "Chỉ ra động lực phát triển của xã hội là sản xuất vật chất",
            "Khẳng định sự phát triển của xã hội tuân theo quy luật khách quan",
            "Cả ba ý trên đều đúng",
          ],
          correct: 3,
        },
        fillAnswer: "Giá trị học thuyết hình thái kinh tế – xã hội: ___.",
        answer: "Cả ba ý trên đều đúng",
        fullFillAnswer:
          "Giá trị học thuyết hình thái kinh tế – xã hội: cả ba ý trên đều đúng.",
      },
    ],
  },

  /* =========================================================
   * Chương 3 — Giai cấp, Dân tộc, Nhà nước & Cách mạng xã hội
   * Nguồn gốc giai cấp; đấu tranh giai cấp; bản chất nhà nước; CMXH.
   * ========================================================= */
  {
    id: 31003,
    title: "Giai cấp, Dân tộc, Nhà nước & Cách mạng xã hội",
    description:
      "Nguồn gốc giai cấp, đấu tranh giai cấp, quan hệ giai cấp – dân tộc, bản chất và chức năng của nhà nước, cách mạng xã hội.",
    icon: "🛡️",
    questions: [
      // 1
      {
        id: 1,
        term: "Nguồn gốc ra đời giai cấp",
        definition:
          "Sự phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất.",
        quiz: {
          question:
            "Nguồn gốc trực tiếp và quyết định sự ra đời của giai cấp là gì?",
          options: [
            "Sự khác biệt về năng lực giữa con người",
            "Sự phân công lao động xã hội và sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
            "Sự khác biệt về chủng tộc và giới tính",
            "Kết quả của các cuộc chiến tranh xâm lược",
          ],
          correct: 1,
        },
        fillAnswer:
          "Giai cấp ra đời do ___ và sự xuất hiện ___ về tư liệu sản xuất.",
        answer:
          "Sự phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất",
        fullFillAnswer:
          "Giai cấp ra đời do phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất.",
      },
      // 2
      {
        id: 2,
        term: "Đặc trưng bản chất của giai cấp (theo V.I. Lênin)",
        definition:
          "Tất cả các đặc trưng, trong đó khác nhau về sở hữu tư liệu sản xuất là cơ bản nhất.",
        quiz: {
          question:
            "Theo V.I. Lênin, đặc trưng cơ bản nhất của giai cấp là gì?",
          options: [
            "Sự khác nhau về địa vị trong một hệ thống sản xuất xã hội nhất định",
            "Sự khác nhau về vai trò trong tổ chức lao động xã hội",
            "Sự khác nhau về phương thức và quy mô thu nhập",
            "Tất cả các đặc trưng trên, trong đó sự khác nhau về sở hữu tư liệu sản xuất là cơ bản nhất",
          ],
          correct: 3,
        },
        fillAnswer:
          "Theo Lênin, đặc trưng cơ bản nhất của giai cấp là khác nhau về ___ đối với tư liệu sản xuất.",
        answer: "Sở hữu",
        fullFillAnswer:
          "Theo Lênin, điểm cơ bản nhất là khác nhau về sở hữu tư liệu sản xuất.",
      },
      // 3
      {
        id: 3,
        term: "Khái niệm đấu tranh giai cấp",
        definition:
          "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau.",
        quiz: {
          question: "Đấu tranh giai cấp là gì?",
          options: [
            "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau",
            "Mọi cuộc xung đột trong đời sống xã hội",
            "Cuộc đấu tranh giữa các quốc gia",
            "Cuộc đấu tranh giữa các cá nhân",
          ],
          correct: 0,
        },
        fillAnswer: "Đấu tranh giai cấp là: ___.",
        answer:
          "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau",
        fullFillAnswer:
          "Đấu tranh giai cấp là đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập.",
      },
      // 4
      {
        id: 4,
        term: "Nguồn gốc đấu tranh giai cấp",
        definition:
          "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp.",
        quiz: {
          question: "Nguồn gốc của đấu tranh giai cấp là gì?",
          options: [
            "Mâu thuẫn về tư tưởng và tôn giáo",
            "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp",
            "Mâu thuẫn về văn hoá và lối sống",
            "Mâu thuẫn trong quan hệ gia đình",
          ],
          correct: 1,
        },
        fillAnswer: "Nguồn gốc đấu tranh giai cấp: ___.",
        answer: "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp",
        fullFillAnswer:
          "Nguồn gốc đấu tranh giai cấp là mâu thuẫn lợi ích giai cấp không thể điều hoà.",
      },
      // 5
      {
        id: 5,
        term: "Vai trò của đấu tranh giai cấp",
        definition: "Một động lực quan trọng của sự phát triển xã hội.",
        quiz: {
          question:
            "Theo quan điểm Mác-xít, vai trò của đấu tranh giai cấp trong xã hội có giai cấp là gì?",
          options: [
            "Gây ra sự hỗn loạn và thụt lùi cho xã hội",
            "Là một động lực quan trọng của sự phát triển xã hội",
            "Chỉ có ý nghĩa trong việc lật đổ chính quyền",
            "Không có vai trò gì đặc biệt",
          ],
          correct: 1,
        },
        fillAnswer: "Vai trò của đấu tranh giai cấp là ___.",
        answer: "Một động lực quan trọng của sự phát triển xã hội",
        fullFillAnswer:
          "Đấu tranh giai cấp là một động lực quan trọng của phát triển xã hội.",
      },
      // 6
      {
        id: 6,
        term: "Đỉnh cao của đấu tranh giai cấp",
        definition: "Cách mạng xã hội.",
        quiz: {
          question: "Đỉnh cao của đấu tranh giai cấp thường dẫn tới:",
          options: [
            "Cải cách xã hội",
            "Hoà giải giai cấp",
            "Cách mạng xã hội",
            "Bầu cử dân chủ",
          ],
          correct: 2,
        },
        fillAnswer: "Đỉnh cao của đấu tranh giai cấp thường dẫn tới ___.",
        answer: "Cách mạng xã hội",
        fullFillAnswer:
          "Đỉnh cao đấu tranh giai cấp thường dẫn tới cách mạng xã hội.",
      },
      // 7
      {
        id: 7,
        term: "Cơ sở hình thành dân tộc",
        definition:
          "Sự thống nhất ngôn ngữ, lãnh thổ, đời sống kinh tế, văn hoá và sự gắn bó bền vững của cộng đồng.",
        quiz: {
          question: "Dân tộc được hình thành dựa trên cơ sở của:",
          options: [
            "Sự thống nhất về ngôn ngữ và lãnh thổ",
            "Sự thống nhất về đời sống kinh tế và văn hoá",
            "Sự gắn bó của một cộng đồng người ổn định, bền vững",
            "Tất cả các yếu tố trên",
          ],
          correct: 3,
        },
        fillAnswer: "Dân tộc được hình thành dựa trên: ___.",
        answer: "Tất cả các yếu tố trên",
        fullFillAnswer:
          "Dân tộc hình thành trên tổng hoà các yếu tố: ngôn ngữ, lãnh thổ, kinh tế, văn hoá, cộng đồng.",
      },
      // 8
      {
        id: 8,
        term: "Thời điểm ra đời của dân tộc",
        definition: "Ra đời muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản.",
        quiz: {
          question: "So với giai cấp, khái niệm dân tộc:",
          options: [
            "Ra đời sớm hơn",
            "Ra đời muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản",
            "Ra đời cùng lúc",
            "Không liên quan đến nhau",
          ],
          correct: 1,
        },
        fillAnswer: "So với giai cấp, dân tộc ra đời ___.",
        answer: "Muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản",
        fullFillAnswer:
          "Dân tộc ra đời muộn hơn, gắn với quá trình phát triển của chủ nghĩa tư bản.",
      },
      // 9
      {
        id: 9,
        term: "Quan hệ giữa giai cấp và dân tộc",
        definition: "Có mối quan hệ biện chứng, thống nhất.",
        quiz: {
          question:
            "Mối quan hệ giữa giai cấp và dân tộc được thể hiện như thế nào?",
          options: [
            "Lợi ích giai cấp và lợi ích dân tộc hoàn toàn tách biệt",
            "Lợi ích giai cấp quyết định hoàn toàn lợi ích dân tộc",
            "Lợi ích giai cấp và lợi ích dân tộc có mối quan hệ biện chứng, thống nhất với nhau",
            "Lợi ích dân tộc quyết định hoàn toàn lợi ích giai cấp",
          ],
          correct: 2,
        },
        fillAnswer: "Quan hệ giữa giai cấp và dân tộc là mối quan hệ ___, ___.",
        answer: "Biện chứng, thống nhất",
        fullFillAnswer:
          "Giữa giai cấp và dân tộc tồn tại mối quan hệ biện chứng, thống nhất.",
      },
      // 10
      {
        id: 10,
        term: "Nguồn gốc ra đời nhà nước",
        definition:
          "Khi xã hội xuất hiện chế độ tư hữu và phân chia giai cấp đối kháng.",
        quiz: {
          question: "Nhà nước ra đời khi nào?",
          options: [
            "Ngay từ khi xã hội loài người xuất hiện",
            "Khi xã hội xuất hiện tư hữu và phân chia giai cấp đối kháng",
            "Khi có nhu cầu quản lý các công việc chung của cộng đồng",
            "Khi dân số phát triển đến một quy mô nhất định",
          ],
          correct: 1,
        },
        fillAnswer:
          "Nhà nước ra đời khi xã hội xuất hiện ___ và phân chia ___ đối kháng.",
        answer: "Tư hữu; giai cấp",
        fullFillAnswer:
          "Nhà nước ra đời khi xuất hiện tư hữu và sự đối kháng giai cấp.",
      },
      // 11
      {
        id: 11,
        term: "Bản chất nhà nước (theo Mác – Lênin)",
        definition: "Công cụ chuyên chính của giai cấp thống trị.",
        quiz: {
          question: "Bản chất của nhà nước theo quan điểm Mác – Lênin là gì?",
          options: [
            "Là tổ chức công quyền trung lập, đứng trên mọi giai cấp",
            "Là công cụ chuyên chính của giai cấp thống trị",
            "Là tổ chức để điều hoà mâu thuẫn giai cấp",
            "Là cơ quan đại diện cho lợi ích của toàn thể nhân dân",
          ],
          correct: 1,
        },
        fillAnswer: "Bản chất nhà nước theo Mác – Lênin: ___.",
        answer: "Công cụ chuyên chính của giai cấp thống trị",
        fullFillAnswer:
          "Theo Mác – Lênin, nhà nước là công cụ chuyên chính của giai cấp thống trị.",
      },
      // 12
      {
        id: 12,
        term: "Chức năng cơ bản của nhà nước",
        definition:
          "Chức năng thống trị chính trị (bạo lực trấn áp) và chức năng xã hội.",
        quiz: {
          question: "Chức năng cơ bản của nhà nước là gì?",
          options: [
            "Chức năng đối nội và chức năng đối ngoại",
            "Chức năng kinh tế và chức năng văn hoá",
            "Chức năng thống trị chính trị (bạo lực trấn áp) và chức năng xã hội",
            "Chức năng lập pháp, hành pháp và tư pháp",
          ],
          correct: 2,
        },
        fillAnswer: "Hai chức năng cơ bản của nhà nước là ___ và ___.",
        answer: "Thống trị chính trị; chức năng xã hội",
        fullFillAnswer:
          "Chức năng cơ bản của nhà nước gồm thống trị chính trị và chức năng xã hội.",
      },
      // 13
      {
        id: 13,
        term: "Kiểu nhà nước đầu tiên trong lịch sử",
        definition: "Nhà nước chủ nô.",
        quiz: {
          question: "Đâu là kiểu nhà nước đầu tiên trong lịch sử?",
          options: [
            "Nhà nước phong kiến",
            "Nhà nước tư sản",
            "Nhà nước chủ nô",
            "Nhà nước xã hội chủ nghĩa",
          ],
          correct: 2,
        },
        fillAnswer: "Kiểu nhà nước đầu tiên trong lịch sử là ___.",
        answer: "Nhà nước chủ nô",
        fullFillAnswer:
          "Kiểu nhà nước đầu tiên trong lịch sử là nhà nước chủ nô.",
      },
      // 14
      {
        id: 14,
        term: "Khái niệm cách mạng xã hội (nghĩa hẹp)",
        definition:
          "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn.",
        quiz: {
          question: "Cách mạng xã hội theo nghĩa hẹp là gì?",
          options: [
            "Sự thay đổi dần dần về văn hoá, xã hội",
            "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn",
            "Mọi sự biến đổi trong đời sống",
            "Các cuộc cải cách kinh tế",
          ],
          correct: 1,
        },
        fillAnswer: "Cách mạng xã hội (nghĩa hẹp) là: ___.",
        answer:
          "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn",
        fullFillAnswer:
          "Cách mạng xã hội (nghĩa hẹp) là đấu tranh lật đổ chế độ lỗi thời, thiết lập chế độ tiến bộ hơn.",
      },
      // 15
      {
        id: 15,
        term: "Nguồn gốc của cách mạng xã hội",
        definition:
          "Bắt nguồn từ mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất.",
        quiz: {
          question: "Nguồn gốc của cách mạng xã hội là gì?",
          options: [
            "Do ý muốn chủ quan của các nhà lãnh đạo",
            "Do sự tuyên truyền của các thế lực bên ngoài",
            "Bắt nguồn từ mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất",
            "Do sự khủng hoảng về đạo đức xã hội",
          ],
          correct: 2,
        },
        fillAnswer:
          "Nguồn gốc cách mạng xã hội: mâu thuẫn gay gắt giữa ___ và ___.",
        answer: "Lực lượng sản xuất và quan hệ sản xuất",
        fullFillAnswer:
          "Nguồn gốc cách mạng xã hội là mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất.",
      },
    ],
  },

  /* =========================================================
   * Chương 4 — Con người, văn hoá & vai trò quần chúng
   * Bản chất con người; tha hoá; khác biệt người – vật; vai trò quần chúng; văn hoá và phát triển.
   * ========================================================= */
  {
    id: 31004,
    title: "Con người, văn hoá & vai trò quần chúng",
    description:
      "Triết học về con người trong chủ nghĩa Mác – Lênin: bản chất, lao động, tha hoá; vai trò quần chúng nhân dân; định hướng xây dựng văn hoá.",
    icon: "🌱",
    questions: [
      // 1 (từ câu 17 bộ đầu)
      {
        id: 1,
        term: "Xây dựng văn hoá Việt Nam",
        definition:
          "Phát triển kinh tế đồng thời kế thừa có chọn lọc truyền thống và tiếp thu tinh hoa nhân loại.",
        quiz: {
          question:
            "Để xây dựng nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc, cần làm gì?",
          options: [
            "Kế thừa có chọn lọc các giá trị truyền thống và tiếp thu tinh hoa nhân loại.",
            "Chỉ tập trung phát triển kinh tế, văn hoá tự phát triển.",
            "Xoá bỏ hoàn toàn các giá trị cũ.",
            "Du nhập toàn bộ văn hoá nước ngoài.",
          ],
          correct: 0,
        },
        fillAnswer: "Cần ___ giá trị truyền thống và ___ tinh hoa nhân loại.",
        answer: "Kế thừa có chọn lọc; tiếp thu",
        fullFillAnswer:
          "Phải kế thừa có chọn lọc truyền thống và tiếp thu tinh hoa nhân loại.",
      },
      // 2 (46)
      {
        id: 2,
        term: "Bản chất con người (theo Mác – Lênin)",
        definition: "Tổng hoà các mối quan hệ xã hội.",
        quiz: {
          question: "Theo chủ nghĩa Mác – Lênin, bản chất con người là:",
          options: [
            "Tổng hoà các mối quan hệ xã hội",
            "Một thực thể sinh vật thuần tuý",
            "Một thực thể có lý tính, bất biến",
            "Một thực thể do thượng đế sinh ra",
          ],
          correct: 0,
        },
        fillAnswer: "Bản chất con người theo Mác – Lênin là ___.",
        answer: "Tổng hoà các mối quan hệ xã hội",
        fullFillAnswer:
          "Bản chất con người là tổng hoà các mối quan hệ xã hội.",
      },
      // 3 (47)
      {
        id: 3,
        term: "Con người – chủ thể và sản phẩm của lịch sử",
        definition: "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử.",
        quiz: {
          question:
            "Câu “Con người là sản phẩm của lịch sử và của chính bản thân con người” có nghĩa là gì?",
          options: [
            "Con người tự tạo ra mình mà không cần điều kiện khách quan",
            "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử",
            "Lịch sử quyết định hoàn toàn con người",
            "Con người không thể thay đổi được lịch sử",
          ],
          correct: 1,
        },
        fillAnswer: "Con người vừa là ___, vừa là ___ của lịch sử.",
        answer: "Chủ thể; sản phẩm",
        fullFillAnswer:
          "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử.",
      },
      // 4 (48)
      {
        id: 4,
        term: "Khác biệt căn bản giữa con người và con vật",
        definition: "Con người biết lao động sản xuất.",
        quiz: {
          question:
            "Theo quan điểm Mác-xít, sự khác biệt căn bản giữa con người và con vật là gì?",
          options: [
            "Con người biết sử dụng công cụ",
            "Con người có ngôn ngữ",
            "Con người có tư duy",
            "Con người biết lao động sản xuất",
          ],
          correct: 3,
        },
        fillAnswer: "Sự khác biệt căn bản: con người biết ___.",
        answer: "Lao động sản xuất",
        fullFillAnswer: "Khác biệt căn bản: con người biết lao động sản xuất.",
      },
      // 5 (49)
      {
        id: 5,
        term: "Nguồn gốc tha hoá con người",
        definition:
          "Nảy sinh trong xã hội có chế độ tư hữu, có giai cấp đối kháng.",
        quiz: {
          question: "Hiện tượng tha hoá con người nảy sinh trong xã hội nào?",
          options: [
            "Xã hội cộng sản nguyên thuỷ",
            "Xã hội có chế độ tư hữu, có giai cấp đối kháng",
            "Xã hội xã hội chủ nghĩa",
            "Mọi xã hội trong lịch sử",
          ],
          correct: 1,
        },
        fillAnswer: "Tha hoá nảy sinh trong xã hội có ___ và ___ giai cấp.",
        answer: "Chế độ tư hữu; đối kháng giai cấp",
        fullFillAnswer:
          "Tha hoá nảy sinh trong xã hội có tư hữu và đối kháng giai cấp.",
      },
      // 6 (50)
      {
        id: 6,
        term: "Vai trò của quần chúng nhân dân",
        definition:
          "Là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử.",
        quiz: {
          question: "Vai trò của quần chúng nhân dân trong lịch sử là gì?",
          options: [
            "Là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử",
            "Chỉ là đám đông thụ động, bị các vĩ nhân chi phối",
            "Chỉ đóng vai trò phụ trong các sự kiện lịch sử",
            "Không có vai trò gì đáng kể",
          ],
          correct: 0,
        },
        fillAnswer: "Quần chúng nhân dân là lực lượng ___ ra lịch sử.",
        answer: "Sáng tạo",
        fullFillAnswer:
          "Quần chúng nhân dân là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử.",
      },
    ],
  },
];

// --- Rút gọn mô tả chương ---
for (const c of chapters) {
  if (c.id === 31001) {
    c.description = "Nền tảng, cấu trúc và quan hệ giữa tồn tại xã hội & ý thức xã hội.";
  }
  if (c.id === 31002) {
    c.description = "Phương thức sản xuất; lực lượng–quan hệ sản xuất; cơ sở hạ tầng & kiến trúc thượng tầng.";
  }
  if (c.id === 31003) {
    c.description = "Nguồn gốc giai cấp, đấu tranh giai cấp, nhà nước, cách mạng xã hội.";
  }
  if (c.id === 31004) {
    c.description = "Bản chất con người, lao động, tha hoá; vai trò quần chúng; văn hoá.";
  }
}

// --- Bổ sung câu hỏi để mỗi chương có ít nhất 20 câu ---
(function appendMoreQuestions() {
  /* ========== CHƯƠNG 1: Tồn tại xã hội & Ý thức xã hội ========== */
  {
    const ch = chapters.find(c => c.id === 31001);
    if (ch) {
      const nextId = () => ch.questions.length + 1;

      while (ch.questions.length < 20) {
        const need = 20 - ch.questions.length;

        if (need > 0) ch.questions.push({
          id: nextId(),
          term: "Phân biệt ý thức thông thường và ý thức lý luận",
          definition:
            "Ý thức thông thường hình thành trực tiếp từ trải nghiệm đời sống; ý thức lý luận khái quát có hệ thống dựa trên thực tiễn và tri thức khoa học.",
          quiz: {
            question:
              "Sự khác nhau cơ bản giữa ý thức thông thường và ý thức lý luận là gì?",
            options: [
              "Ý thức thông thường luôn đúng, ý thức lý luận chỉ là giả thuyết.",
              "Ý thức thông thường mang tính kinh nghiệm trực tiếp; ý thức lý luận mang tính khái quát, hệ thống dựa trên khoa học.",
              "Ý thức thông thường thuộc về cá nhân; ý thức lý luận chỉ thuộc về nhà nước.",
              "Không có khác biệt đáng kể giữa hai loại ý thức này.",
            ],
            correct: 1,
          },
          fillAnswer:
            "Ý thức thông thường mang tính ___; ý thức lý luận mang tính ___ và có cơ sở khoa học.",
          answer: "Kinh nghiệm trực tiếp; khái quát, hệ thống",
          fullFillAnswer:
            "Ý thức thông thường mang tính kinh nghiệm trực tiếp; ý thức lý luận mang tính khái quát, hệ thống và có cơ sở khoa học.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Nguồn gốc xã hội trực tiếp của ý thức",
          definition:
            "Lao động và ngôn ngữ là nguồn gốc xã hội trực tiếp của ý thức con người.",
          quiz: {
            question:
              "Nguồn gốc xã hội trực tiếp của ý thức con người là gì?",
            options: [
              "Bộ não con người và thế giới khách quan.",
              "Lao động và ngôn ngữ.",
              "Cảm xúc và niềm tin cá nhân.",
              "Thiên tài bẩm sinh.",
            ],
            correct: 1,
          },
          fillAnswer: "Nguồn gốc xã hội trực tiếp của ý thức là ___ và ___.",
          answer: "Lao động; ngôn ngữ",
          fullFillAnswer:
            "Nguồn gốc xã hội trực tiếp của ý thức là lao động và ngôn ngữ.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Vai trò của thực tiễn đối với nhận thức",
          definition:
            "Thực tiễn là cơ sở, mục tiêu và tiêu chuẩn kiểm nghiệm chân lý của nhận thức.",
          quiz: {
            question:
              "Vai trò của thực tiễn đối với nhận thức được khái quát đúng nhất ở mệnh đề nào?",
            options: [
              "Thực tiễn chỉ là mục tiêu của nhận thức.",
              "Thực tiễn là cơ sở của nhận thức, nhưng không liên quan đến chân lý.",
              "Thực tiễn là cơ sở, mục tiêu và tiêu chuẩn kiểm nghiệm chân lý.",
              "Thực tiễn đối lập với nhận thức.",
            ],
            correct: 2,
          },
          fillAnswer:
            "Thực tiễn là ___, ___ và ___ kiểm nghiệm chân lý của nhận thức.",
          answer: "Cơ sở; mục tiêu; tiêu chuẩn",
          fullFillAnswer:
            "Thực tiễn là cơ sở, mục tiêu và tiêu chuẩn kiểm nghiệm chân lý của nhận thức.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Khắc phục tính lạc hậu của ý thức xã hội",
          definition:
            "Phối hợp phát triển kinh tế với giáo dục, pháp luật, truyền thông khoa học và nâng cao đời sống văn hoá để đổi mới ý thức xã hội.",
          quiz: {
            question:
              "Biện pháp cơ bản để khắc phục tính lạc hậu của ý thức xã hội là:",
            options: [
              "Chỉ tập trung phát triển kinh tế, không cần giáo dục.",
              "Kết hợp phát triển kinh tế với giáo dục, pháp luật và nâng cao đời sống văn hoá.",
              "Bãi bỏ mọi phong tục, tập quán truyền thống.",
              "Chỉ tuyên truyền bằng khẩu hiệu.",
            ],
            correct: 1,
          },
          fillAnswer:
            "Cần kết hợp phát triển ___ với ___, pháp luật và nâng cao đời sống ___.",
          answer: "Kinh tế; giáo dục; văn hoá",
          fullFillAnswer:
            "Cần kết hợp phát triển kinh tế với giáo dục, pháp luật và nâng cao đời sống văn hoá.",
        });
      }
    }
  }

  /* ========== CHƯƠNG 2: Học thuyết hình thái kinh tế – xã hội ========== */
  // Đã đủ 20 câu trong dữ liệu gốc → không bổ sung.

  /* ========== CHƯƠNG 3: Giai cấp, Dân tộc, Nhà nước & Cách mạng xã hội ========== */
  {
    const ch = chapters.find(c => c.id === 31003);
    if (ch) {
      const nextId = () => ch.questions.length + 1;

      while (ch.questions.length < 20) {
        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Các hình thức chủ yếu của đấu tranh giai cấp",
          definition:
            "Đấu tranh trên ba lĩnh vực chủ yếu: kinh tế, chính trị và tư tưởng – văn hoá.",
          quiz: {
            question:
              "Đấu tranh giai cấp thường diễn ra chủ yếu trên các lĩnh vực nào?",
            options: [
              "Kinh tế, chính trị và tư tưởng – văn hoá.",
              "Quân sự, tôn giáo và gia đình.",
              "Khoa học, nghệ thuật và thể thao.",
              "Ngoại giao, du lịch và thương mại điện tử.",
            ],
            correct: 0,
          },
          fillAnswer:
            "Đấu tranh giai cấp diễn ra trên ba lĩnh vực: ___, ___ và ___.",
          answer: "Kinh tế; chính trị; tư tưởng – văn hoá",
          fullFillAnswer:
            "Đấu tranh giai cấp diễn ra chủ yếu trên ba lĩnh vực: kinh tế, chính trị và tư tưởng – văn hoá.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Quan hệ giữa vấn đề dân tộc và giai cấp",
          definition:
            "Trong cách mạng giải phóng dân tộc, đặt lợi ích dân tộc lên hàng đầu đồng thời gắn với lợi ích của giai cấp và nhân dân lao động.",
          quiz: {
            question:
              "Cách hiểu đúng về quan hệ dân tộc – giai cấp trong cách mạng giải phóng dân tộc là:",
            options: [
              "Chỉ ưu tiên lợi ích giai cấp, bỏ qua lợi ích dân tộc.",
              "Chỉ ưu tiên lợi ích dân tộc, phủ nhận vấn đề giai cấp.",
              "Kết hợp đúng đắn: đặt lợi ích dân tộc lên hàng đầu và gắn với lợi ích của giai cấp, nhân dân lao động.",
              "Không có liên hệ giữa hai vấn đề này.",
            ],
            correct: 2,
          },
          fillAnswer:
            "Cần đặt lợi ích ___ lên hàng đầu và gắn với lợi ích của ___, ___ lao động.",
          answer: "Dân tộc; giai cấp; nhân dân",
          fullFillAnswer:
            "Cần đặt lợi ích dân tộc lên hàng đầu và gắn với lợi ích của giai cấp, nhân dân lao động.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Phân loại chức năng của nhà nước: đối nội và đối ngoại",
          definition:
            "Một cách phân loại chức năng nhà nước là chức năng đối nội và chức năng đối ngoại.",
          quiz: {
            question:
              "Theo cách phân loại phổ biến, chức năng của nhà nước gồm:",
            options: [
              "Đối nội và đối ngoại.",
              "Lập pháp và tư pháp.",
              "Tài chính và văn hoá.",
              "Khoa học và giáo dục.",
            ],
            correct: 0,
          },
          fillAnswer: "Chức năng của nhà nước gồm ___ và ___.",
          answer: "Đối nội; đối ngoại",
          fullFillAnswer:
            "Chức năng của nhà nước có thể phân thành đối nội và đối ngoại.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Điều kiện của cách mạng xã hội",
          definition:
            "Cần có điều kiện khách quan chín muồi và nhân tố chủ quan: lực lượng chính trị, tổ chức lãnh đạo, ý thức và sự chuẩn bị của quần chúng.",
          quiz: {
            question:
              "Điều kiện cơ bản để bùng nổ cách mạng xã hội gồm những gì?",
            options: [
              "Chỉ cần khủng hoảng kinh tế.",
              "Chỉ cần có tổ chức lãnh đạo.",
              "Cả điều kiện khách quan chín muồi và nhân tố chủ quan (lực lượng lãnh đạo, tổ chức, ý thức quần chúng).",
              "Không cần điều kiện gì đặc biệt.",
            ],
            correct: 2,
          },
          fillAnswer:
            "Cách mạng xã hội cần điều kiện ___ chín muồi và nhân tố ___ vững mạnh.",
          answer: "Khách quan; chủ quan",
          fullFillAnswer:
            "Cách mạng xã hội cần điều kiện khách quan chín muồi và nhân tố chủ quan vững mạnh.",
        });

        if (ch.questions.length < 20) ch.questions.push({
          id: nextId(),
          term: "Cải cách xã hội và cách mạng xã hội",
          definition:
            "Cải cách xã hội là những biến đổi từng phần trong khuôn khổ trật tự hiện có; cách mạng xã hội là biến đổi căn bản chế độ chính trị – xã hội.",
          quiz: {
            question:
              "Phát biểu nào đúng khi so sánh cải cách xã hội với cách mạng xã hội?",
            options: [
              "Cải cách xã hội là biến đổi từng phần; cách mạng xã hội là biến đổi căn bản chế độ.",
              "Cả hai đều hoàn toàn giống nhau.",
              "Cải cách xã hội luôn nhanh hơn cách mạng xã hội.",
              "Cách mạng xã hội luôn xảy ra bằng con đường bạo lực quân sự.",
            ],
            correct: 0,
          },
          fillAnswer:
            "Cải cách là biến đổi ___; cách mạng là biến đổi ___ chế độ.",
          answer: "Từng phần; căn bản",
          fullFillAnswer:
            "Cải cách là biến đổi từng phần; cách mạng là biến đổi căn bản chế độ.",
        });
      }
    }
  }

  /* ========== CHƯƠNG 4: Con người, văn hoá & vai trò quần chúng ========== */
  {
    const ch = chapters.find(c => c.id === 31004);
    if (ch) {
      const nextId = () => ch.questions.length + 1;

      const add = (obj) => ch.questions.length < 20 && ch.questions.push({ id: nextId(), ...obj });

      add({
        term: "Nhu cầu, lợi ích và động cơ",
        definition:
          "Lợi ích là động lực trực tiếp thúc đẩy hoạt động của con người; nhu cầu là nguồn gốc nảy sinh lợi ích; động cơ định hướng hành vi.",
        quiz: {
          question:
            "Phát biểu nào đúng về vai trò của lợi ích trong đời sống xã hội?",
          options: [
            "Lợi ích chỉ là yếu tố phụ trong hành vi.",
            "Lợi ích là động lực trực tiếp thúc đẩy hoạt động của con người.",
            "Lợi ích đối lập với đạo đức nên cần loại bỏ.",
            "Lợi ích chỉ có tính cá nhân, không thể có lợi ích xã hội.",
          ],
          correct: 1,
        },
        fillAnswer: "Lợi ích là ___ trực tiếp thúc đẩy hoạt động.",
        answer: "Động lực",
        fullFillAnswer: "Lợi ích là động lực trực tiếp thúc đẩy hoạt động.",
      });

      add({
        term: "Phát triển toàn diện con người",
        definition:
          "Hài hoà các mặt đức, trí, thể, mỹ và nghề nghiệp; tạo điều kiện cho cá nhân phát triển năng lực và phẩm chất.",
        quiz: {
          question:
            "Mục tiêu của phát triển toàn diện con người theo quan điểm Mác – Lênin là:",
          options: [
            "Chỉ chú trọng tri thức.",
            "Chỉ chú trọng thể lực.",
            "Phát triển hài hoà đức, trí, thể, mỹ và nghề nghiệp.",
            "Loại bỏ các giá trị đạo đức truyền thống.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Phát triển toàn diện hướng tới hài hoà ___, ___, ___, ___ và ___.",
        answer: "Đức; trí; thể; mỹ; nghề nghiệp",
        fullFillAnswer:
          "Phát triển toàn diện hướng tới hài hoà đức, trí, thể, mỹ và nghề nghiệp.",
      });

      add({
        term: "Tự do và tất yếu",
        definition:
          "Tự do là sự nhận thức được quy luật tất yếu và biết cải biến hiện thực theo các quy luật đó.",
        quiz: {
          question:
            "Theo quan điểm duy vật biện chứng, tự do được hiểu là:",
          options: [
            "Sự tuỳ tiện không bị ràng buộc.",
            "Sự phủ nhận mọi quy luật khách quan.",
            "Sự nhận thức được tất yếu và cải biến hiện thực theo quy luật.",
            "Sự tách rời con người khỏi xã hội.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Tự do là sự nhận thức ___ và cải biến hiện thực theo ___.",
        answer: "Tất yếu; quy luật",
        fullFillAnswer:
          "Tự do là sự nhận thức được tất yếu và cải biến hiện thực theo quy luật.",
      });

      add({
        term: "Lao động sáng tạo nâng tầm con người",
        definition:
          "Lao động sáng tạo phát triển năng lực, mở rộng thế giới quan và làm phong phú bản chất xã hội của con người.",
        quiz: {
          question:
            "Vai trò của lao động sáng tạo đối với sự phát triển con người là:",
          options: [
            "Không đáng kể so với bẩm sinh.",
            "Chủ yếu làm tăng thu nhập vật chất.",
            "Phát triển năng lực, thế giới quan và bản chất xã hội của con người.",
            "Chỉ cần khi theo đuổi nghệ thuật.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Lao động sáng tạo phát triển ___, mở rộng ___ và làm phong phú bản chất xã hội.",
        answer: "Năng lực; thế giới quan",
        fullFillAnswer:
          "Lao động sáng tạo phát triển năng lực, mở rộng thế giới quan và làm phong phú bản chất xã hội.",
      });

      add({
        term: "Biểu hiện của tha hoá trong lao động",
        definition:
          "Người lao động bị lệ thuộc vào sản phẩm và quá trình lao động, đánh mất ý nghĩa và tính sáng tạo của lao động.",
        quiz: {
          question:
            "Biểu hiện nào sau đây phản ánh hiện tượng tha hoá trong lao động?",
          options: [
            "Người lao động làm chủ công cụ và quá trình lao động.",
            "Người lao động coi lao động là hoạt động sáng tạo có ý nghĩa.",
            "Người lao động bị biến thành phụ thuộc máy móc, sản phẩm xa lạ với chính mình.",
            "Người lao động tự do lựa chọn cách thức lao động.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Tha hoá: người lao động bị ___ máy móc, sản phẩm trở nên ___ với mình.",
        answer: "Phụ thuộc; xa lạ",
        fullFillAnswer:
          "Tha hoá: người lao động bị phụ thuộc máy móc, sản phẩm trở nên xa lạ với mình.",
      });

      add({
        term: "Con người và tự nhiên trong phát triển bền vững",
        definition:
          "Con người và tự nhiên thống nhất biện chứng; cần khai thác hợp lý, bảo vệ môi trường để phát triển bền vững.",
        quiz: {
          question:
            "Quan điểm đúng về quan hệ con người – tự nhiên là:",
          options: [
            "Con người phải khuất phục hoàn toàn trước tự nhiên.",
            "Con người có thể khai thác tự nhiên vô hạn.",
            "Thống nhất biện chứng: khai thác hợp lý gắn với bảo vệ môi trường.",
            "Không có mối liên hệ giữa con người và tự nhiên.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Cần khai thác ___ gắn với ___ môi trường để phát triển bền vững.",
        answer: "Hợp lý; bảo vệ",
        fullFillAnswer:
          "Cần khai thác hợp lý gắn với bảo vệ môi trường để phát triển bền vững.",
      });

      add({
        term: "Vai trò của giá trị văn hoá",
        definition:
          "Giá trị văn hoá định hướng hành vi, bồi dưỡng nhân cách và củng cố bản sắc cộng đồng.",
        quiz: {
          question:
            "Vai trò cơ bản của giá trị văn hoá đối với phát triển con người là:",
          options: [
            "Định hướng hành vi, bồi dưỡng nhân cách, củng cố bản sắc.",
            "Chỉ phục vụ giải trí.",
            "Thay thế pháp luật.",
            "Làm giảm trách nhiệm xã hội.",
          ],
          correct: 0,
        },
        fillAnswer:
          "Giá trị văn hoá giúp định hướng ___, bồi dưỡng ___ và củng cố ___.",
        answer: "Hành vi; nhân cách; bản sắc",
        fullFillAnswer:
          "Giá trị văn hoá định hướng hành vi, bồi dưỡng nhân cách và củng cố bản sắc.",
      });

      add({
        term: "Gia đình – tế bào của xã hội",
        definition:
          "Gia đình là môi trường đầu tiên hình thành nhân cách, giáo dục đạo đức và thói quen xã hội.",
        quiz: {
          question:
            "Vì sao gia đình được coi là tế bào của xã hội?",
          options: [
            "Vì gia đình chỉ có chức năng kinh tế.",
            "Vì gia đình là nơi đầu tiên hình thành nhân cách và giáo dục đạo đức.",
            "Vì gia đình quyết định mọi chính sách xã hội.",
            "Vì gia đình thay thế nhà trường.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Gia đình là nơi đầu tiên hình thành ___ và giáo dục ___.",
        answer: "Nhân cách; đạo đức",
        fullFillAnswer:
          "Gia đình là nơi đầu tiên hình thành nhân cách và giáo dục đạo đức.",
      });

      add({
        term: "Giáo dục và tự giáo dục",
        definition:
          "Giáo dục xã hội và tự giáo dục của cá nhân kết hợp mới tạo nên sự phát triển bền vững về phẩm chất và năng lực.",
        quiz: {
          question:
            "Điều kiện để phát triển bền vững phẩm chất và năng lực cá nhân là:",
          options: [
            "Chỉ dựa vào giáo dục xã hội.",
            "Chỉ dựa vào tự giáo dục.",
            "Kết hợp giáo dục xã hội với tự giáo dục.",
            "Không cần giáo dục.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Cần kết hợp giáo dục ___ với ___ để phát triển bền vững.",
        answer: "Xã hội; tự giáo dục",
        fullFillAnswer:
          "Cần kết hợp giáo dục xã hội với tự giáo dục để phát triển bền vững.",
      });

      add({
        term: "Vai trò của thanh niên",
        definition:
          "Thanh niên là lực lượng xung kích trong đổi mới sáng tạo, tiếp thu khoa học – công nghệ và xây dựng văn hoá mới.",
        quiz: {
          question:
            "Vai trò nổi bật của thanh niên trong phát triển xã hội là:",
          options: [
            "Bảo tồn nguyên trạng, hạn chế đổi mới.",
            "Xung kích trong đổi mới sáng tạo và tiếp thu khoa học – công nghệ.",
            "Chỉ tham gia hoạt động văn nghệ.",
            "Hạn chế tham gia vào đời sống chính trị – xã hội.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Thanh niên là lực lượng ___ trong đổi mới và tiếp thu ___.",
        answer: "Xung kích; khoa học – công nghệ",
        fullFillAnswer:
          "Thanh niên là lực lượng xung kích trong đổi mới và tiếp thu khoa học – công nghệ.",
      });

      add({
        term: "Đạo đức số trong thời đại công nghệ",
        definition:
          "Sử dụng công nghệ có trách nhiệm, tôn trọng quyền riêng tư, trung thực thông tin và tránh gây hại trên không gian mạng.",
        quiz: {
          question:
            "Nội dung cốt lõi của đạo đức số là gì?",
          options: [
            "Sử dụng công nghệ không cần tuân thủ pháp luật.",
            "Sử dụng công nghệ có trách nhiệm, tôn trọng quyền riêng tư và trung thực thông tin.",
            "Chia sẻ mọi dữ liệu để tiện lợi.",
            "Chỉ quan tâm hiệu quả kinh tế.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Đạo đức số: sử dụng công nghệ ___, tôn trọng ___ và trung thực ___.",
        answer: "Có trách nhiệm; quyền riêng tư; thông tin",
        fullFillAnswer:
          "Đạo đức số: sử dụng công nghệ có trách nhiệm, tôn trọng quyền riêng tư và trung thực thông tin.",
      });

      add({
        term: "Bình đẳng giới trong phát triển con người",
        definition:
          "Bảo đảm cơ hội và điều kiện phát triển ngang nhau cho mọi giới trong giáo dục, việc làm, lãnh đạo và đời sống gia đình – xã hội.",
        quiz: {
          question:
            "Bình đẳng giới hướng tới mục tiêu nào sau đây?",
          options: [
            "Ưu tiên tuyệt đối một giới.",
            "Cơ hội và điều kiện phát triển ngang nhau cho mọi giới.",
            "Không cần quan tâm đến chênh lệch.",
            "Chỉ tập trung lĩnh vực kinh tế.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Bình đẳng giới: bảo đảm ___ và ___ phát triển ngang nhau.",
        answer: "Cơ hội; điều kiện",
        fullFillAnswer:
          "Bình đẳng giới: bảo đảm cơ hội và điều kiện phát triển ngang nhau.",
      });

      add({
        term: "An sinh xã hội và phát triển con người",
        definition:
          "Hệ thống an sinh xã hội giúp bảo vệ người yếu thế, giảm bất bình đẳng và tạo nền tảng cho phát triển bền vững.",
        quiz: {
          question:
            "Vai trò của an sinh xã hội đối với phát triển con người là:",
          options: [
            "Làm giảm động lực phấn đấu của toàn xã hội.",
            "Bảo vệ người yếu thế, giảm bất bình đẳng và tạo nền tảng phát triển bền vững.",
            "Chỉ có ý nghĩa trong thiên tai.",
            "Chỉ mang tính từ thiện ngắn hạn.",
          ],
          correct: 1,
        },
        fillAnswer:
          "An sinh xã hội bảo vệ ___, giảm ___ và tạo nền tảng ___ bền vững.",
        answer: "Người yếu thế; bất bình đẳng; phát triển",
        fullFillAnswer:
          "An sinh xã hội bảo vệ người yếu thế, giảm bất bình đẳng và tạo nền tảng phát triển bền vững.",
      });

      add({
        term: "Quan hệ giữa hạnh phúc cá nhân và cộng đồng",
        definition:
          "Hạnh phúc cá nhân bền vững gắn với hạnh phúc cộng đồng; cá nhân – xã hội thống nhất trong phát triển.",
        quiz: {
          question:
            "Phát biểu nào đúng về quan hệ hạnh phúc cá nhân – cộng đồng?",
          options: [
            "Hạnh phúc cá nhân hoàn toàn tách rời hạnh phúc cộng đồng.",
            "Hạnh phúc cá nhân bền vững gắn với hạnh phúc cộng đồng.",
            "Chỉ cần cộng đồng hạnh phúc, cá nhân tự khắc hạnh phúc.",
            "Chỉ cần cá nhân hạnh phúc, không cần quan tâm cộng đồng.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Hạnh phúc cá nhân bền vững gắn với hạnh phúc ___.",
        answer: "Cộng đồng",
        fullFillAnswer:
          "Hạnh phúc cá nhân bền vững gắn với hạnh phúc cộng đồng.",
      });

      // Nếu vẫn thiếu do ban đầu số câu < 6, tiếp tục thêm cho đủ 20 (safety)
      while (ch.questions.length < 20) {
        ch.questions.push({
          id: nextId(),
          term: "Tự hoàn thiện nhân cách",
          definition:
            "Quá trình chủ động rèn luyện phẩm chất, tri thức và kỹ năng để đạt mục tiêu sống có ý nghĩa.",
          quiz: {
            question:
              "Tự hoàn thiện nhân cách bao gồm nội dung nào sau đây?",
            options: [
              "Tự phát triển phẩm chất, tri thức và kỹ năng.",
              "Chỉ phát triển thể lực.",
              "Chỉ tích luỹ bằng cấp.",
              "Phụ thuộc hoàn toàn vào môi trường.",
            ],
            correct: 0,
          },
          fillAnswer:
            "Tự hoàn thiện cần rèn luyện ___, ___ và ___ một cách chủ động.",
          answer: "Phẩm chất; tri thức; kỹ năng",
          fullFillAnswer:
            "Tự hoàn thiện cần rèn luyện phẩm chất, tri thức và kỹ năng một cách chủ động.",
        });
      }
    }
  }
})();

