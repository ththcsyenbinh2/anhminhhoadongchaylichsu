// constants/missions-quiz-extended.ts
// Extended Quiz Questions with Diverse Types for Better Engagement

export interface ExtendedQuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'sequence' | 'matching';
  question: string;
  options?: string[];
  correctAnswer?: string | number | string[];
  hint?: string;
  explanation?: string;
  imageUrl?: string;
  choices?: Array<{ id: string; text: string }>;
  pairs?: Array<{ left: string; right: string }>;
}

// ===== QUIZ HUNG VUONG =====
export const HUNG_VUONG_PRACTICE_QUESTIONS: ExtendedQuizQuestion[] = [
  {
    id: 'hv_1',
    type: 'multiple-choice',
    question: 'Truyền thuyết nào giải thích nguồn gốc con Rồng cháu Tiên?',
    options: ['Lạc Long Quân và Âu Cơ', 'Sơn Tinh Thủy Tinh', 'Thánh Gióng'],
    correctAnswer: 'Lạc Long Quân và Âu Cơ',
    hint: 'Đây là hai vị thần trong truyền thuyết cổ Việt.',
    explanation: 'Truyền thuyết Lạc Long Quân và Âu Cơ kể rằng hai vị thần này hôn nhân và sinh ra một trăm người con, từ đó có dân tộc Việt Nam.'
  },
  {
    id: 'hv_2',
    type: 'true-false',
    question: 'Bánh chưng tượng trưng cho Đất, bánh dày tượng trưng cho Mặt Trời.',
    correctAnswer: false,
    hint: 'Bánh dày có hình tròn, bánh chưng có hình vuông.',
    explanation: 'Sai. Bánh chưng (hình vuông) tượng trưng cho Đất, bánh dày (hình tròn) tượng trưng cho Bầu Trời/Mặt Trời.'
  },
  {
    id: 'hv_3',
    type: 'fill-blank',
    question: 'Trống đồng là một hiện vật quý giá giúp em hình dung về _____ của người Việt cổ.',
    correctAnswer: 'đời sống',
    hint: 'Từ liên quan đến cuộc sống hàng ngày, văn hóa, tín ngưỡng.',
    explanation: 'Trống đồng phản ánh đầy đủ về đời sống vật chất, tinh thần và tín ngưỡng của người Việt cổ thời Văn Lang - Âu Lạc.'
  },
  {
    id: 'hv_4',
    type: 'multiple-choice',
    question: 'Nhà nước Văn Lang do dòng họ nào cai trị?',
    options: ['Họ Hùng (Hùng Vương)', 'Họ Lý', 'Họ Trần', 'Họ Nguyễn'],
    correctAnswer: 'Họ Hùng (Hùng Vương)',
    hint: 'Từ 18 vị Hùng Vương cai trị dân tộc trong suốt thời kỳ Văn Lang.',
    explanation: 'Trong suốt thời Văn Lang (khoảng thế kỷ 7 - 3 trước CN), có 18 vị Hùng Vương (gọi chung là họ Hùng) cai trị đất nước.'
  },
  {
    id: 'hv_5',
    type: 'true-false',
    question: 'Người Việt cổ sử dụng nhà sàn vì nó có thể giúp tránh thú dữ và lũ lụt.',
    correctAnswer: true,
    hint: 'Nhà sàn được xây dựng cao trên mặt đất.',
    explanation: 'Đúng. Kiến trúc nhà sàn với mái cong hình thuyền là một nét độc đáo giúp người Việt cổ thích nghi với môi trường sông nước và tránh thú dữ.'
  },
  {
    id: 'hv_6',
    type: 'matching',
    question: 'Nối các hình ảnh trên trống đồng với ý nghĩa của chúng:',
    pairs: [
      { left: 'Ngôi sao ở trung tâm', right: 'Tín ngưỡng thờ Mặt Trời' },
      { left: 'Đàn chim Lạc bay ngược chiều', right: 'Sự hòa hợp con người - thiên nhiên' },
      { left: 'Hình người giã gạo', right: 'Tầm quan trọng của lúa nước' },
      { left: 'Chiến binh cầm vũ khí', right: 'Sự sẵn sàng bảo vệ lãnh thổ' }
    ],
    correctAnswer: ['Tín ngưỡng thờ Mặt Trời', 'Sự hòa hợp con người - thiên nhiên', 'Tầm quan trọng của lúa nước', 'Sự sẵn sàng bảo vệ lãnh thổ'],
    hint: 'Xem lại mô tả các hình ảnh trên trống đồng.',
    explanation: 'Mỗi hình ảnh trên trống đồng đều có ý nghĩa sâu sắc phản ánh đời sống, tín ngưỡng và chiến lược bảo vệ của dân tộc.'
  },
  {
    id: 'hv_7',
    type: 'sequence',
    question: 'Sắp xếp các sự kiện theo thứ tự thời gian:',
    choices: [
      { id: 'a', text: 'Lạc Long Quân và Âu Cơ sinh ra 100 người con' },
      { id: 'b', text: 'Vua Hùng dạy dân cấy lúa' },
      { id: 'c', text: 'Sự tích Bánh Chưng, Bánh Dày' },
      { id: 'd', text: 'An Dương Vương xây thành Cổ Loa' }
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    hint: 'Dựa vào trình tự phát triển từ khởi nguồn đến giai đoạn sau.',
    explanation: 'Thứ tự chính xác thể hiện sự phát triển từ khởi nguồn, qua nền văn minh lúa nước, cho đến giai đoạn xây dựng quốc gia có hệ thống.'
  },
  {
    id: 'hv_8',
    type: 'fill-blank',
    question: 'Thánh Gióng đánh tan giặc Ân bằng cách sử dụng roi sắt, và khi roi gãy, ông đã dùng _____ để tiếp tục đánh.',
    correctAnswer: 'bụi tre',
    hint: 'Đó là một cây cối phổ biến ở nông thôn Việt.',
    explanation: 'Khi roi sắt gãy, Thánh Gióng đã kíp lấy bụi tre làng để tiếp tục đánh tan giặc, thể hiện sự linh hoạt và dũng cảm.'
  },
  {
    id: 'hv_9',
    type: 'multiple-choice',
    question: 'Công việc nào của người Việt cổ được phản ánh nhiều nhất trên trống đồng?',
    options: ['Đánh cá và buôn bán', 'Trồng lúa và nông nghiệp', 'Chế tác đồ gốm', 'Dệt vải lụa'],
    correctAnswer: 'Trồng lúa và nông nghiệp',
    hint: 'Đây là cơ sở kinh tế chính của xã hội Việt cổ.',
    explanation: 'Hình ảnh người giã gạo, các cảnh tượng liên quan đến lúa nước xuất hiện nhiều lần trên trống đồng, cho thấy lúa nước là cơ sở của nền văn minh Văn Lang.'
  },
  {
    id: 'hv_10',
    type: 'true-false',
    question: 'Nhà sàn mái cong hình thuyền của người Việt cổ được thiết kế dựa trên kinh nghiệm sống trên sông nước.',
    correctAnswer: true,
    hint: 'Kiến trúc là kết quả của sự thích nghi với môi trường.',
    explanation: 'Đúng. Người Việt cổ sống chủ yếu gần các sông suối nên họ thiết kế kiến trúc nhà sàn với mái cong để thoát nước mưa và phù hợp với cảnh quan.'
  },
  {
    id: 'hv_11',
    type: 'fill-blank',
    question: 'Các chiến binh trên trống đồng cầm các loại vũ khí như giáo, mác và _____.',
    correctAnswer: 'rìu chiến',
    hint: 'Đó là một loại vũ khí cổ được tạo từ đá hoặc kim loại.',
    explanation: 'Các vũ khí giáo, mác, rìu chiến cho thấy người Việt cổ đã có một lực lượng quân sự được trang bị khá tốt.'
  },
  {
    id: 'hv_12',
    type: 'multiple-choice',
    question: 'Điều gì cho thấy đời sống tinh thần của người Việt cổ rất phong phú?',
    options: ['Chỉ làm nông nghiệp', 'Có các vũ công và nhạc công với nhạc cụ như khèn, trống', 'Không có đời sống tinh thần', 'Chỉ chơi đủa bóng'],
    correctAnswer: 'Có các vũ công và nhạc công với nhạc cụ như khèn, trống',
    hint: 'Tìm những hình ảnh liên quan đến văn hóa, nghệ thuật trên trống đồng.',
    explanation: 'Các hình ảnh vũ công và nhạc công với nhạc cụ trên trống đồng cho thấy người Việt cổ có nền văn hóa giải trí phong phú với các lễ hội, nghi lễ tưng bừng.'
  },
  {
    id: 'hv_13',
    type: 'true-false',
    question: 'An Dương Vương là vị vua cuối cùng của thời Văn Lang.',
    correctAnswer: false,
    hint: 'An Dương Vương lập nên nước Âu Lạc sau khi Văn Lang kết thúc.',
    explanation: 'Sai. An Dương Vương không phải là vua Văn Lang mà là vua Âu Lạc, một quốc gia kế tiếp sau Văn Lang.'
  },
  {
    id: 'hv_14',
    type: 'fill-blank',
    question: 'Nỏ thần do _____ sáng chế là vũ khí có khả năng bắn xa rất lợi hại.',
    correctAnswer: 'An Dương Vương',
    hint: 'Đây là vị vua của nước Âu Lạc.',
    explanation: 'An Dương Vương chế tạo Nỏ thần - một vũ khí quân sự tiên tiến để bảo vệ nước Âu Lạc khỏi các cuộc xâm lược từ phương Bắc.'
  },
  {
    id: 'hv_15',
    type: 'multiple-choice',
    question: 'Theo em, bài học lớn nhất từ thời Văn Lang là gì?',
    options: [
      'Người Việt có khả năng thích nghi, sáng tạo và bảo vệ đất nước',
      'Nên xây nhà trên mặt đất bằng phẳng',
      'Chỉ nên làm nông nghiệp, không làm gì khác',
      'Không cần có vũ khí để bảo vệ'
    ],
    correctAnswer: 'Người Việt có khả năng thích nghi, sáng tạo và bảo vệ đất nước',
    hint: 'Suy nghĩ về những thành tựu đặc biệt của người Việt cổ.',
    explanation: 'Thời Văn Lang cho thấy người Việt cổ là một dân tộc sáng tạo, có khả năng thích nghi với môi trường, phát triển nền văn minh lúa nước, và có lòng yêu nước bảo vệ lãnh thổ.'
  }
];

// ===== QUIZ HAI BA TRUNG =====
export const HAI_BA_TRUNG_PRACTICE_QUESTIONS: ExtendedQuizQuestion[] = [
  {
    id: 'hbt_1',
    type: 'multiple-choice',
    question: 'Hai Bà Trưng phất cờ khởi nghĩa ở đâu?',
    options: ['Mê Linh', 'Hoa Lư', 'Điện Biên', 'Thăng Long'],
    correctAnswer: 'Mê Linh',
    hint: 'Đây là một vùng đất ở phía Bắc Việt Nam.',
    explanation: 'Năm 40 CN, Hai Bà Trưng phát động khởi nghĩa từ Mê Linh (nay thuộc Hà Nội) chống lại sự cai trị của Tô Định - quan Hán.'
  },
  {
    id: 'hbt_2',
    type: 'true-false',
    question: 'Trưng Trắc là em gái của Trưng Nhị.',
    correctAnswer: false,
    hint: 'Hãy xem lại mối quan hệ giữa hai bà.',
    explanation: 'Sai. Trưng Trắc là chị, Trưng Nhị là em. Trưng Trắc lãnh đạo cuộc khởi nghĩa, được em Trưng Nhị hỗ trợ.'
  },
  {
    id: 'hbt_3',
    type: 'fill-blank',
    question: 'Tô Định là _____ cai trị Giao Châu (Việt Nam) thời nhà Hán.',
    correctAnswer: 'quan',
    hint: 'Đây là một chức vụ hành chính.',
    explanation: 'Tô Định là quan Hán cai trị Giao Châu, nơi sự áp bức của ông gây ra phẫn nộ dân chúng và là nguyên nhân trực tiếp khiến Hai Bà Trưng khởi nghĩa.'
  },
  {
    id: 'hbt_4',
    type: 'multiple-choice',
    question: 'Cuộc khởi nghĩa Hai Bà Trưng kéo dài khoảng bao lâu?',
    options: ['Khoảng 3 năm', 'Khoảng 1 năm', 'Khoảng 10 năm', 'Khoảng 20 năm'],
    correctAnswer: 'Khoảng 3 năm',
    hint: 'Nó bắt đầu năm 40 CN.',
    explanation: 'Cuộc khởi nghĩa kéo dài từ năm 40 đến năm 43 CN, khi quân Hán dưới sỹ hệ Ma Viện đã dập tắt cuộc khởi nghĩa tại Cẩm Khê.'
  },
  {
    id: 'hbt_5',
    type: 'true-false',
    question: 'Hai Bà Trưng được ghi nhận là những nữ anh hùng dũng cảm trong lịch sử Việt Nam.',
    correctAnswer: true,
    hint: 'Hãy suy nghĩ về hành động của họ.',
    explanation: 'Đúng. Mặc dù cuối cùng bị thất bại, Hai Bà Trưng được coi là những nữ anh hùng dũng cảm đã đứng lên chống lại ách thống trị của nhà Hán để giải phóng dân tộc.'
  },
  {
    id: 'hbt_6',
    type: 'sequence',
    question: 'Sắp xếp các sự kiện liên quan đến Hai Bà Trưng theo thứ tự:',
    choices: [
      { id: 'a', text: 'Tô Định áp bức, bắt tướng Thi' },
      { id: 'b', text: 'Hai Bà Trưng phát động khởi nghĩa tại Mê Linh' },
      { id: 'c', text: 'Quân Hán dưới sỹ hệ Ma Viện đánh bại quân khởi nghĩa' },
      { id: 'd', text: 'Hai Bà Trưng được tôn lên làm nữ vương' }
    ],
    correctAnswer: ['a', 'b', 'd', 'c'],
    hint: 'Theo dõi chuỗi sự kiện từ nguyên nhân đến hậu quả.',
    explanation: 'Theo thứ tự: trước tiên Tô Định áp bức, khiến Trưng Trắc phát động khởi nghĩa (40 CN), sau đó hai bà được tôn lên làm nữ vương, nhưng cuối cùng bị Ma Viện đánh bại (43 CN).'
  },
  {
    id: 'hbt_7',
    type: 'multiple-choice',
    question: 'Hình ảnh nào phù hợp nhất với Hai Bà Trưng?',
    options: ['Ngọn cờ khởi nghĩa bay phấp phới', 'Cọc gỗ Bạch Đằng', 'Nhà sàn Việt cổ', 'Trống đồng'],
    correctAnswer: 'Ngọn cờ khởi nghĩa bay phấp phới',
    hint: 'Đây là hình ảnh biểu tượng của sự kháng cự.',
    explanation: 'Ngọn cờ khởi nghĩa là hình ảnh biểu tượng cho tinh thần chống áp bức của Hai Bà Trưng và quân nhân dân.'
  },
  {
    id: 'hbt_8',
    type: 'fill-blank',
    question: 'Ma Viện là _____ của nhà Hán được cử sang để dập tắt khởi nghĩa Hai Bà Trưng.',
    correctAnswer: 'sỹ hệ',
    hint: 'Đây là một chức vụ quân sự cao cấp thời Hán.',
    explanation: 'Ma Viện là sỹ hệ (tư lệnh quân sự cao cấp) của nhà Hán, được cử sang để dập tắt cuộc khởi nghĩa của Hai Bà Trưng.'
  },
  {
    id: 'hbt_9',
    type: 'true-false',
    question: 'Trưng Trắc có chồng tên là Tông Phu.',
    correctAnswer: true,
    hint: 'Anh chồng cũng là một nhân vật có vai trò trong cuộc khởi nghĩa.',
    explanation: 'Đúng. Chồng của Trưng Trắc là Tông Phu (hay Tịnh Phu). Anh ấy cũng tham gia vào cuộc khởi nghĩa cùng với hai vợ chồng.'
  },
  {
    id: 'hbt_10',
    type: 'multiple-choice',
    question: 'Tại sao Tô Định lại bị các vị tướng sỹ khác cương quyết chống đối?',
    options: [
      'Vì ông quá khuyến khích nông nghiệp',
      'Vì ông gây sức ép lớn lên bộ tộc địa phương, bắt buộc phụ nữ được phép lấy chồng phải kết hôn theo luật Hán',
      'Vì ông quá tốt bụng',
      'Vì ông không chịu nộp thuế cho Hán'
    ],
    correctAnswer: 'Vì ông gây sức ép lớn lên bộ tộc địa phương, bắt buộc phụ nữ được phép lấy chồng phải kết hôn theo luật Hán',
    hint: 'Liên quan đến những chính sách áp bức của ông.',
    explanation: 'Tô Định áp bức dân chúng, bắt buộc phụ nữ phải tuân theo luật Hán, điều này gây phẫn nộ lớn, đặc biệt là với các vị tướng sỹ địa phương như Mê Linh.'
  },
  {
    id: 'hbt_11',
    type: 'fill-blank',
    question: 'Cuộc khởi nghĩa Hai Bà Trưng được coi là _____ lâu nhất chống lại ách đô hộ của nhà Hán.',
    correctAnswer: 'cuộc khởi nghĩa thành công nhất',
    hint: 'Mặc dù thất bại cuối cùng, nó vẫn tồn tại được 3 năm.',
    explanation: 'Dù cuối cùng bị thất bại, cuộc khởi nghĩa Hai Bà Trưng vẫn được coi là một cuộc khởi nghĩa lớn và quan trọng nhất lần đầu tiên chống lại ách đô hộ của nhà Hán.'
  },
  {
    id: 'hbt_12',
    type: 'multiple-choice',
    question: 'Cảm xúc nào em nghĩ Hai Bà Trưng có khi phát động khởi nghĩa?',
    options: ['Sợ hãi và tuyệt vọng', 'Dũng cảm, quyết tâm và yêu nước', 'Vui mừng và không lo lắng', 'Tức giận nhưng không dũng cảm'],
    correctAnswer: 'Dũng cảm, quyết tâm và yêu nước',
    hint: 'Suy nghĩ về hoàn cảnh nguy hiểm họ đối mặt.',
    explanation: 'Hai Bà Trưng phải có dũng cảm lớn, quyết tâm sắt đá và tình yêu sâu sắc dành cho đất nước để dám phát động khởi nghĩa chống lại một siêu cường lực như nhà Hán.'
  },
  {
    id: 'hbt_13',
    type: 'true-false',
    question: 'Sau khi bị thất bại, Hai Bà Trưng đã đầu hàng Tô Định.',
    correctAnswer: false,
    hint: 'Hãy xem lại cách họ kết thúc cuộc sống.',
    explanation: 'Sai. Khi thất bại, Hai Bà Trưng đã nhảy sông Hằng để chết một cách anh hùng, không chịu đầu hàng địch.'
  },
  {
    id: 'hbt_14',
    type: 'fill-blank',
    question: 'Trong lịch sử Việt Nam, Hai Bà Trưng được tôn vinh là những nữ anh hùng mở đầu cho truyền thống _____ của dân tộc.',
    correctAnswer: 'chống ngoại xâm',
    hint: 'Liên quan đến việc bảo vệ đất nước.',
    explanation: 'Hai Bà Trưng là những nữ anh hùng đầu tiên mở đầu cho truyền thống chống ngoại xâm, giữ vững độc lập của dân tộc Việt.'
  },
  {
    id: 'hbt_15',
    type: 'multiple-choice',
    question: 'Theo em, bài học từ câu chuyện Hai Bà Trưng là gì?',
    options: [
      'Chỉ những người có quyền lực mới có thể cứu nước',
      'Tình yêu nước không biết tuổi tác, giới tính, nó sẽ khiến con người dũng cảm hành động để bảo vệ dân tộc',
      'Không cần làm gì vì sẽ thất bại dù sao',
      'Chỉ nam giới mới có thể là anh hùng'
    ],
    correctAnswer: 'Tình yêu nước không biết tuổi tác, giới tính, nó sẽ khiến con người dũng cảm hành động để bảo vệ dân tộc',
    hint: 'Suy nghĩ về ý nghĩa lâu dài của hành động của họ.',
    explanation: 'Câu chuyện Hai Bà Trưng dạy chúng ta rằng tình yêu nước là một sức mạnh vô cùng, nó có thể khiến bất kỳ ai - dù là phụ nữ - dũng cảm đứng lên bảo vệ dân tộc và độc lập.'
  }
];

// ===== QUIZ NGO QUYEN =====
export const NGO_QUYEN_PRACTICE_QUESTIONS: ExtendedQuizQuestion[] = [
  {
    id: 'nq_1',
    type: 'multiple-choice',
    question: 'Ngô Quyền đánh thắng quân Nam Hán trên sông nào?',
    options: ['Bạch Đằng', 'Hồng', 'Hương', 'Sài Gòn'],
    correctAnswer: 'Bạch Đằng',
    hint: 'Sông này nằm ở phía Bắc Việt Nam, gần Hà Nội.',
    explanation: 'Năm 938, Ngô Quyền đánh thắng quân Nam Hán của Chu Văn Đáo trên sông Bạch Đằng thông qua mưu kế đóng cọc dưới lòng sông.'
  },
  {
    id: 'nq_2',
    type: 'true-false',
    question: 'Mưu kế nổi bật trong trận Bạch Đằng là bẫy pháo dưới lòng sông.',
    correctAnswer: false,
    hint: 'Đây là một cách bảo vệ chứ không phải vũ khí.',
    explanation: 'Sai. Mưu kế nổi bật là đóng cọc gỗ nhọn dưới lòng sông. Khi thủy triều lên, thuyền địch không thấy cọc rồi bị đâm thủng.'
  },
  {
    id: 'nq_3',
    type: 'fill-blank',
    question: 'Trận Bạch Đằng 938 có ý nghĩa đặc biệt vì nó chấm dứt _____ năm Bắc thuộc.',
    correctAnswer: 'hơn 1000',
    hint: 'Đây là khoảng thời gian rất dài.',
    explanation: 'Chiến thắng Bạch Đằng năm 938 đã chấm dứt hơn 1000 năm Bắc thuộc (từ 111 TCN đến 938 CN), mở ra thời kỳ độc lập lâu dài của Việt Nam.'
  },
  {
    id: 'nq_4',
    type: 'true-false',
    question: 'Ngô Quyền sử dụng thủy triều để tăng hiệu quả của bẫy cọc trong trận Bạch Đằng.',
    correctAnswer: true,
    hint: 'Thủy triều làm tăng mực nước sông.',
    explanation: 'Đúng. Ngô Quyền rất tài tình - khi thủy triều lên, mực nước sông cao hơn, nên thuyền địch không thấy cọc gỗ nhọn cắm sẵn dưới lòng sông.'
  },
  {
    id: 'nq_5',
    type: 'multiple-choice',
    question: 'Vì sao cọc nhọn cắm dưới lòng sông lại là mưu kế tài tình?',
    options: [
      'Vì cọc quá lớn để địch nhìn thấy',
      'Vì khi thủy triều lên, thuyền địch không thấy cọc rồi bị đâm thủng',
      'Vì cọc có thể bay lên khi thủy triều lên',
      'Vì địch sợ nước sâu'
    ],
    correctAnswer: 'Vì khi thủy triều lên, thuyền địch không thấy cọc rồi bị đâm thủng',
    hint: 'Liên quan đến sự che giấu và bất ngờ.',
    explanation: 'Đây là một mưu kế rất tài tình: khi thủy triều lên, mực nước cao hơn, che phủ lấy các cọc nhọn. Thuyền địch tiến vào mà không biết, rồi bị đâm thủng.'
  },
  {
    id: 'nq_6',
    type: 'fill-blank',
    question: 'Chu Văn Đáo là vị vua của nước _____ xâm lược Việt Nam vào thời Ngô Quyền.',
    correctAnswer: 'Nam Hán',
    hint: 'Đây là một quốc gia phía Nam Trung Quốc thời đó.',
    explanation: 'Chu Văn Đáo là vua Nam Hán cố gắng xâm lược Việt Nam, nhưng đã bị Ngô Quyền dẫn quân đánh bại trong trận Bạch Đằng năm 938.'
  },
  {
    id: 'nq_7',
    type: 'sequence',
    question: 'Sắp xếp các sự kiện liên quan đến Ngô Quyền theo thứ tự:',
    choices: [
      { id: 'a', text: 'Ngô Quyền lập nên nước Đại Việt độc lập' },
      { id: 'b', text: 'Chu Văn Đáo cử quân xâm lược Việt Nam' },
      { id: 'c', text: 'Ngô Quyền đánh bại quân Nam Hán tại sông Bạch Đằng' },
      { id: 'd', text: 'Ngô Quyền trở thành vua độc lập' }
    ],
    correctAnswer: ['b', 'c', 'd', 'a'],
    hint: 'Theo dõi chuỗi sự kiện từ xâm lược đến độc lập.',
    explanation: 'Theo thứ tự: Nam Hán xâm lược → Ngô Quyền đánh bại quân Nam Hán → Ngô Quyền trở thành vua độc lập → lập nước Đại Việt.'
  },
  {
    id: 'nq_8',
    type: 'true-false',
    question: 'Ngô Quyền chỉ dựa vào sức mạnh quân sự để thắng, không cần dùng trí tuệ.',
    correctAnswer: false,
    hint: 'Mưu kế cọc dưới sông là kết quả của trí tuệ.',
    explanation: 'Sai. Ngô Quyền vừa sử dụng trí tuệ (mưu kế cọc dưới sông) vừa sử dụng sức mạnh quân sự để thắng quân Nam Hán.'
  },
  {
    id: 'nq_9',
    type: 'multiple-choice',
    question: 'Mặc dù mưu kế rất tài tình, điều gì là chìa khóa thực sự của chiến thắng?',
    options: [
      'Chỉ có cọc gỗ là đủ',
      'Kế hoạch kỹ lưỡng + tinh thần quân sĩ cao + thủy triều thuận tiện',
      'Quân Nam Hán quá yếu',
      'Ngô Quyền là một phù thủy'
    ],
    correctAnswer: 'Kế hoạch kỹ lưỡng + tinh thần quân sĩ cao + thủy triều thuận tiện',
    hint: 'Chiến thắng không phải chỉ do một yếu tố duy nhất.',
    explanation: 'Chiến thắng Bạch Đằng là kết quả của sự kết hợp: mưu kế thông minh + quân sĩ có tinh thần cao + thủy triều thuận tiện + địa hình quen thuộc.'
  },
  {
    id: 'nq_10',
    type: 'fill-blank',
    question: 'Trận Bạch Đằng 938 được coi là _____ nhất trong lịch sử chiến tranh Việt Nam.',
    correctAnswer: 'mưu kế tài tình nhất',
    hint: 'Liên quan đến tính hay của chiến thuật.',
    explanation: 'Trận Bạch Đằng được coi là một trong những mưu kế tài tình nhất trong lịch sử chiến tranh Việt Nam, thể hiện sự sáng tạo và thông minh của Ngô Quyền.'
  },
  {
    id: 'nq_11',
    type: 'true-false',
    question: 'Sau chiến thắng Bạch Đằng, Ngô Quyền tuyên bố độc lập và lập nước Đại Việt.',
    correctAnswer: true,
    hint: 'Đây là kết quả tự nhiên sau khi chiến thắng.',
    explanation: 'Đúng. Sau chiến thắng Bạch Đằng năm 938, Ngô Quyền đã tuyên bố độc lập và lập nên nước Đại Việt, chấm dứt 1000 năm Bắc thuộc.'
  },
  {
    id: 'nq_12',
    type: 'multiple-choice',
    question: 'Em học được bài học gì từ trận Bạch Đằng của Ngô Quyền?',
    options: [
      'Chỉ cần dũng cảm là đủ',
      'Dùng trí tuệ có thể thắng kẻ địch mạnh hơn',
      'Không cần chuẩn bị nếu có quân đông',
      'Không thể thắng quân xâm lược'
    ],
    correctAnswer: 'Dùng trí tuệ có thể thắng kẻ địch mạnh hơn',
    hint: 'Tập trung vào vai trò của trí tuệ.',
    explanation: 'Trần Bạch Đằng dạy chúng ta rằng trí tuệ, mưu kế thông minh có thể giúp ta thắng kẻ địch mạnh hơn mình. Đây là một bài học quý giá về chiến lược.'
  },
  {
    id: 'nq_13',
    type: 'fill-blank',
    question: 'Cọc gỗ dưới sông Bạch Đằng được gọi là _____ hoặc còn gọi là "chiến đấu".',
    correctAnswer: 'cọc chiến',
    hint: 'Từ này liên quan đến chiến tranh.',
    explanation: 'Các cọc gỗ nhọn được cắm dưới lòng sông được gọi là "cọc chiến" - một mưu kế quân sự tinh xảo của Ngô Quyền.'
  },
  {
    id: 'nq_14',
    type: 'true-false',
    question: 'Trận Bạch Đằng là lần đầu tiên Việt Nam chiến thắng một quốc gia láng giềng.',
    correctAnswer: true,
    hint: 'Đây là một dấu mốc lịch sử quan trọng.',
    explanation: 'Đúng. Trận Bạch Đằng năm 938 là lần đầu tiên Việt Nam dưới sự lãnh đạo của Ngô Quyền chiến thắng một quốc gia láng giềng (Nam Hán) để tuyên bố độc lập.'
  },
  {
    id: 'nq_15',
    type: 'multiple-choice',
    question: 'Tại sao Ngô Quyền được coi là một vị tướng xuất sắc trong lịch sử Việt Nam?',
    options: [
      'Vì ông rất giàu có',
      'Vì ông kết hợp trí tuệ, can đảm và hiểu biết về địa hình để chiến thắng',
      'Vì ông là người Trung Quốc',
      'Vì ông hay xuất hiện trong các truyện cổ tích'
    ],
    correctAnswer: 'Vì ông kết hợp trí tuệ, can đảm và hiểu biết về địa hình để chiến thắng',
    hint: 'Liên quan đến các đặc điểm của một vị tướng tài ba.',
    explanation: 'Ngô Quyền được coi là vị tướng xuất sắc vì ông là người sáng tạo, có trí tuệ, dũng cảm, hiểu biết sâu về địa hình, thủy triều, và biết cách truyền động viên quân sĩ.'
  }
];

// ===== QUIZ NHA DINH =====
export const NHA_DINH_PRACTICE_QUESTIONS: ExtendedQuizQuestion[] = [
  {
    id: 'nd_1',
    type: 'multiple-choice',
    question: 'Ai là người dẹp loạn mười hai sứ quân và lập ra nhà Đinh?',
    options: ['Đinh Bộ Lĩnh', 'Lý Thái Tổ', 'Trần Hưng Đạo', 'Ngô Quyền'],
    correctAnswer: 'Đinh Bộ Lĩnh',
    hint: 'Vị này sinh ra ở vùng Hoa Lư.',
    explanation: 'Đinh Bộ Lĩnh là vị anh hùng gắn liền với câu chuyện "cờ lau tập trận", ông đã dẹp loạn mười hai sứ quân chia cắt đất nước và lập nhà Đinh.'
  },
  {
    id: 'nd_2',
    type: 'fill-blank',
    question: 'Quốc hiệu nước ta thời nhà Đinh là _____.',
    correctAnswer: 'Đại Cồ Việt',
    hint: 'Từ này bao gồm từ "Đại" (lớn) và tên gọi cũ của nước ta.',
    explanation: 'Thời nhà Đinh, nước ta được gọi là "Đại Cồ Việt", thể hiện sự thống nhất và độc lập của đất nước.'
  },
  {
    id: 'nd_3',
    type: 'true-false',
    question: 'Ý nghĩa lớn nhất của nhà Đinh là đã dời đô ra Thăng Long.',
    correctAnswer: false,
    hint: 'Điều gì xảy ra trước? Dời đô hay thống nhất?',
    explanation: 'Sai. Ý nghĩa lớn nhất của nhà Đinh là thống nhất đất nước sau chia cắt. Việc dời đô là công việc của nhà Lý sau này.'
  },
  {
    id: 'nd_4',
    type: 'multiple-choice',
    question: 'Kinh đô nước Đại Cồ Việt thời nhà Đinh đặt ở đâu?',
    options: ['Hoa Lư', 'Thăng Long', 'Phú Xuân', 'Sài Gòn'],
    correctAnswer: 'Hoa Lư',
    hint: 'Nơi này nằm ở vùng núi phía Bắc, địa thế hiểm trở.',
    explanation: 'Kinh đô nhà Đinh được đặt ở Hoa Lư (nay ở Ninh Bình), một vị trí có địa thế hiểm trở, dễ bảo vệ.'
  },
  {
    id: 'nd_5',
    type: 'true-false',
    question: '"Mười hai sứ quân" là mười hai vị tướng trung thành của vua.',
    correctAnswer: false,
    hint: 'Hãy xem lại ý nghĩa của từ "sứ quân".',
    explanation: 'Sai. "Mười hai sứ quân" không phải là tướng trung thành, mà là mười hai thế lực cát cứ chia rẽ đất nước thành các vùng riêng biệt.'
  },
  {
    id: 'nd_6',
    type: 'fill-blank',
    question: 'Câu chuyện dân gian nào gắn với tuổi thơ của Đinh Bộ Lĩnh?',
    correctAnswer: 'Cờ lau tập trận',
    hint: 'Đây là một câu chuyện về một cậu bé thông minh.',
    explanation: 'Truyền thuyết "Cờ lau tập trận" kể rằng khi Đinh Bộ Lĩnh còn bé, ông đã dùng cờ lau làm quân cờ và các thứ khác tập trận, thể hiện tài năng quân sự từ nhỏ.'
  },
  {
    id: 'nd_7',
    type: 'sequence',
    question: 'Sắp xếp các sự kiện theo thứ tự thời gian:',
    choices: [
      { id: 'a', text: 'Mười hai sứ quân chia cắt đất nước' },
      { id: 'b', text: 'Đinh Bộ Lĩnh bắt đầu dẹp loạn' },
      { id: 'c', text: 'Đinh Bộ Lĩnh thống nhất đất nước' },
      { id: 'd', text: 'Đinh Bộ Lĩnh lập nhà Đinh và trở thành vua' }
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    hint: 'Theo dõi quá trình từ loạn lạc đến thống nhất.',
    explanation: 'Thứ tự đúng: trước tiên có mười hai sứ quân chia cắt, rồi Đinh Bộ Lĩnh bắt đầu dẹp loạn, cuối cùng thống nhất và lập nhà Đinh.'
  },
  {
    id: 'nd_8',
    type: 'true-false',
    question: 'Đinh Bộ Lĩnh đã chiến thắng các sứ quân bằng cách tấn công trực diện liên tục.',
    correctAnswer: false,
    hint: 'Một vị tướng thông minh thường có cách làm tinh tế hơn.',
    explanation: 'Sai. Đinh Bộ Lĩnh là một chiến lược gia tài ba, ông không chỉ dựa vào tấn công trực diện mà còn sử dụng mưu kế, ngoại giao và khéo léo xoa dịu các sứ quân.'
  },
  {
    id: 'nd_9',
    type: 'multiple-choice',
    question: 'Thời gian dẹp loạn của Đinh Bộ Lĩnh mất khoảng bao lâu?',
    options: ['1 năm', '5 năm', '10 năm', '20 năm'],
    correctAnswer: '10 năm',
    hint: 'Đây là một quá trình dài, không phải nhanh chóng.',
    explanation: 'Quá trình dẹp loạn mười hai sứ quân của Đinh Bộ Lĩnh mất khoảng 10 năm, từ khoảng 968 đến 978 CN.'
  },
  {
    id: 'nd_10',
    type: 'fill-blank',
    question: 'Đất nước bị chia cắt thành mười hai sứ quân là vì sao?',
    correctAnswer: 'không có vua thống nhất',
    hint: 'Liên quan đến tình trạng chính trị lúc bấy giờ.',
    explanation: 'Sau khi Ngô Quyền qua đời, con trai ông (Ngô Xương Văn) yếu kém, không đủ khả năng cai trị, nên đất nước bị chia cắt thành mười hai sứ quân độc lập.'
  },
  {
    id: 'nd_11',
    type: 'multiple-choice',
    question: 'Đúng hay sai: Đinh Bộ Lĩnh lập ra nhà Đinh sau khi dẹp yên các sứ quân và thống nhất đất nước.',
    options: ['Đúng', 'Sai'],
    correctAnswer: 'Đúng',
    hint: 'Hãy theo dõi thứ tự sự kiện.',
    explanation: 'Đúng. Sau khi dẹp loạn thành công và thống nhất đất nước, Đinh Bộ Lĩnh đã lên ngôi vua và lập nhà Đinh.'
  },
  {
    id: 'nd_12',
    type: 'fill-blank',
    question: 'Sự kiện "cờ lau tập trận" cho thấy Đinh Bộ Lĩnh từ nhỏ đã có _____ lớn.',
    correctAnswer: 'chí',
    hint: 'Từ này có nghĩa là quyết tâm, tham vọng lớn.',
    explanation: 'Truyền thuyết "cờ lau tập trận" cho thấy ngay từ khi còn bé, Đinh Bộ Lĩnh đã có chí lớn và tinh thần lãnh đạo vượt trội.'
  },
  {
    id: 'nd_13',
    type: 'true-false',
    question: 'Nhà Đinh kéo dài trong lịch sử Việt Nam khoảng 100 năm.',
    correctAnswer: false,
    hint: 'Nhà Đinh tương đối ngắn, sau đó là nhà Lý.',
    explanation: 'Sai. Nhà Đinh chỉ kéo dài khoảng 60 năm (từ 968 đến 1027 CN), tương đối ngắn so với các triều đại khác.'
  },
  {
    id: 'nd_14',
    type: 'multiple-choice',
    question: 'Tại sao việc thống nhất đất nước của Đinh Bộ Lĩnh lại quan trọng?',
    options: [
      'Đất nước đoàn kết mới mạnh, dân mới được sống bình yên và phát triển',
      'Chỉ để có một ông vua duy nhất',
      'Để dễ thu thuế hơn',
      'Để có thể dời đô'
    ],
    correctAnswer: 'Đất nước đoàn kết mới mạnh, dân mới được sống bình yên và phát triển',
    hint: 'Suy nghĩ về lợi ích dài hạn cho dân chúng.',
    explanation: 'Khi đất nước thống nhất, mọi người được bảo vệ, xã hội ổn định, nông nghiệp phát triển, dân chúng có cuộc sống bình yên và sung túc hơn.'
  },
  {
    id: 'nd_15',
    type: 'multiple-choice',
    question: 'Theo em, điều gì ở Đinh Bộ Lĩnh đáng học tập?',
    options: [
      'Lòng kiên định, dũng cảm và tài năng quân sự',
      'Chỉ sử dụng vũ lực để giải quyết vấn đề',
      'Không quan tâm đến dân chúng',
      'Sợ hãi và tấn công liều lĩnh'
    ],
    correctAnswer: 'Lòng kiên định, dũng cảm và tài năng quân sự',
    hint: 'Suy nghĩ về những đức tính tốt đẹp của ông.',
    explanation: 'Đinh Bộ Lĩnh đáng học tập vì có lòng kiên định (10 năm dẹp loạn không nản), dũng cảm, tài năng quân sự cao, và tình yêu đất nước sâu sắc.'
  }
];

// Export all extended quizzes
export const EXTENDED_QUIZZES = {
  hung_vuong: HUNG_VUONG_PRACTICE_QUESTIONS,
  hai_ba_trung: HAI_BA_TRUNG_PRACTICE_QUESTIONS,
  ngo_quyen: NGO_QUYEN_PRACTICE_QUESTIONS,
  nha_dinh: NHA_DINH_PRACTICE_QUESTIONS,
};
