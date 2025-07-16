const imageList = [
  { src: 'yabomons/001.png',
    name: '白色小精靈',
    description: '擁有一顆純淨的心。'
  },
  { src: 'yabomons/002.png',
    name: '紅色小精靈',
    description: '擁有一顆熱情的心'
  },
  { src: 'yabomons/003.png',
    name: '橙色小精靈',
    description: '擁有一個耀眼的心'
  },
  { src: 'yabomons/004.png',
    name: '金色小精靈',
    description: '擁有一顆光明的心'
  },
  { src: 'yabomons/005.png',
    name: '綠色小精靈',
    description: '擁有一顆純樸的心'
  },
  { src: 'yabomons/006.png',
    name: '藍綠小精靈',
    description: '擁有一顆有個性的心'
  },
  { src: 'yabomons/007.png',
    name: '淺藍小精靈',
    description: '擁有一顆遼闊的心'
  },
  { src: 'yabomons/008.png',
    name: '深藍小精靈',
    description: '擁有一顆平靜的心'
  },
  { src: 'yabomons/009.png',
    name: '紫色小精靈',
    description: '擁有一顆神秘的心'
  },
  { src: 'yabomons/010.png',
    name: '粉紫小精靈',
    description: '擁有一顆浪漫的心'
  },
  { src: 'yabomons/011.png',
    name: '灰色小精靈',
    description: '擁有一顆成熟的心。'
  },
  { src: 'yabomons/012.png',
    name: '棕色小精靈',
    description: '擁有一顆堅定的心'
  },
  { src: 'yabomons/013.png',
    name: '黑色小精靈',
    description: '擁有一個強大的心'
  },
  { src: 'yabomons/014.png',
    name: '彩色小精靈',
    description: '轉啊轉啊七彩霓虹燈'
  },
  { src: 'yabomons/015.png',
    name: '蜜蜂小精靈',
    description: '小心它屁屁的刺！'
  },
  { src: 'yabomons/016.png',
    name: '菇菇小精靈',
    description: '有毒 請勿食用'
  },
  { src: 'yabomons/017.png',
    name: '幸運小精靈',
    description: '為你帶來滿滿的好運！'
  },
  { src: 'yabomons/018.png',
    name: '魔法小精靈',
    description: '霹靂卡霹靂拉拉 波波力那貝貝魯多\n拍拍砰呸 噗哇噗哇噗\n帕美魯克拉魯克 拉哩摟哩波噴\n噗魯魯噗魯 發咪發咪發'
  },
  {
    src: 'yabomons/019.png',
    name: '天使小精靈',
    description: '我來拯救你了！'
  },
  {
    src: 'yabomons/020.png',
    name: '惡魔小精靈',
    description: '搗蛋搗蛋 嘻嘻嘻'
  },
  {
    src: 'yabomons/021.png',
    name: '夜空小精靈',
    description: '跟你的眼睛一樣亮晶晶。'
  },
  {
    src: 'yabomons/022.png',
    name: '櫻花小精靈',
    description: '撒哭拉。'
  },
  {
    src: 'yabomons/023.png',
    name: '聖誕小精靈',
    description: '叮叮噹 叮叮噹 鈴聲多響亮'
  },
  {
    src: 'yabomons/024.png',
    name: '布丁小精靈',
    description: 'ㄉㄨㄞ！'
  },
  {
    src: 'yabomons/025.png',
    name: '雪花小精靈',
    description: '會融化在你的舌尖上。'
  },
  {
    src: 'yabomons/026.png',
    name: '愛心小精靈',
    description: '愛你愛你！啾啾啾——'
  },
  {
    src: 'yabomons/027.png',
    name: '耳機小精靈',
    description: '它聽不見你。'
  },
  {
    src: 'yabomons/028.png',
    name: '蝸牛小精靈',
    description: '它移動得很慢......很慢......'
  },
  {
    src: 'yabomons/029.png',
    name: '番茄小精靈',
    description: '為什麼蒂頭在背上。'
  },
  {
    src: 'yabomons/030.png',
    name: '橘子小精靈',
    description: '別剝了它的皮。'
  },
  {
    src: 'yabomons/031.png',
    name: '用功小精靈',
    description: '看起來學測會滿級分！'
  },
  {
    src: 'yabomons/032.png',
    name: '糖果小精靈',
    description: '把甜甜都送給你！'
  },
  {
    src: 'yabomons/033.png',
    name: '煎蛋小精靈',
    description: '好想把那顆蛋黃戳破。'
  },
  {
    src: 'yabomons/034.png',
    name: '廚師小精靈',
    description: '今天想吃什麼？它全都會煮！'
  },
  {
    src: 'yabomons/035.png',
    name: '魔術小精靈',
    description: '來變個魔術，把你的心變成我的<3'
  },
  {
    src: 'yabomons/036.png',
    name: '藝術小精靈',
    description: '很窮。'
  },
  {
    src: 'yabomons/037.png',
    name: '太陽小精靈',
    description: '小心后羿。'
  },
  {
    src: 'yabomons/038.png',
    name: '火焰小精靈',
    description: '灰修促囉！！！'
  },
  {
    src: 'yabomons/039.png',
    name: '油宅小精靈',
    description: '咪哭達優。'
  },
  {
    src: 'yabomons/040.png',
    name: '社畜小精靈',
    description: '想殺了老闆。'
  },
  {
    src: 'yabomons/041.png',
    name: '畢業小精靈',
    description: '失業小精靈。'
  },
  {
    src: 'yabomons/042.png',
    name: '飯卷小精靈',
    description: '裡面包的是什麼餡呢？'
  },
  {
    src: 'yabomons/043.png',
    name: '生日小精靈',
    description: '它會幫你實現生日願望！'
  },
  {
    src: 'yabomons/044.png',
    name: '護理小精靈',
    description: '痛痛飛走了！'
  },
  {
    src: 'yabomons/045.png',
    name: '唱歌小精靈',
    description: '用閃亮的歌聲開始現場演唱♪'
  },
{
    src: 'yabomons/046.png',
    name: '警察小精靈',
    description: '手舉高！通通不准動！'
  },
{
    src: 'yabomons/047.png',
    name: '手機小精靈',
    description: '看起來會被家長唸的小精靈。'
  },
{
    src: 'yabomons/048.png',
    name: '海盜小精靈',
    description: '會搜括所有寶藏！'
  },
{
    src: 'yabomons/049.png',
    name: '緞帶小精靈',
    description: '可可愛愛漂漂亮亮。'
  },
{
    src: 'yabomons/050.png',
    name: '閃電小精靈',
    description: '傘～～電～～'
  },
{
    src: 'yabomons/101.png',
    name: '小吉小精靈',
    description:'嗷嗚汪汪汪汪嗷嗷嗷汪汪汪汪嗷嗚嗷嗷嗷嗷汪汪汪汪'
  },
  {
    src: 'yabomons/102.png',
    name: '死神小精靈',
    description: '把你討厭的人帶走。'
  },
  {
    src: 'yabomons/103.png',
    name: '土豪小精靈',
    description: '女人，拿著這五億元滾出這個家。'
  },
  {
    src: 'yabomons/104.png',
    name: '攝影小精靈',
    description: '記錄下每個美好的瞬間！'
  },
  {
    src: 'yabomons/105.png',
    name: '監獄小精靈',
    description: '這麼可愛的小精靈究竟犯了什麼罪？'
  },
{
    src: 'yabomons/106.png',
    name: '汽車小精靈',
    description: '不知道能不能真的載人？'
  },
{
    src: 'yabomons/107.png',
    name: '獨角小精靈',
    description: '傳說中的神秘生物！'
  },
{
    src: 'yabomons/108.png',
    name: '鬱金香小精靈',
    description: '鬱金香的花語是愛、美麗、永恆的祝福！'
  },
{
    src: 'yabomons/109.png',
    name: '電腦小精靈',
    description: '沒了電腦會活不下去。'
  },
{
    src: 'yabomons/110.png',
    name: '茄子小精靈',
    description: '它不明白為什麼很多小孩子都討厭自己。'
  },
{
    src: 'yabomons/111.png',
    name: '香蕉小精靈',
    description:'別踩到它的皮！'
  },
  {
    src: 'yabomons/112.png',
    name: '修女小精靈',
    description: '它會為你祈禱。'
  },
  {
    src: 'yabomons/113.png',
    name: '馴鹿小精靈',
    description: '只會在每年的12月25日現身。'
  },
  {
    src: 'yabomons/114.png',
    name: '小丑小精靈',
    description: '這張圖並沒有在罵誰。'
  },
  {
    src: 'yabomons/115.png',
    name: '雪人小精靈',
    description: '要......融......化......了......'
  },
{
    src: 'yabomons/116.png',
    name: '史萊姆小精靈',
    description: '軟Q軟Q，還會變成各種形狀。'
  },
{
    src: 'yabomons/117.png',
    name: '冰淇淋小精靈',
    description: '適合在炎炎夏日來上一球！'
  },
{
    src: 'yabomons/118.png',
    name: '頭帶小精靈',
    description: '做什麼都幹勁滿滿的樣子！'
  },
{
    src: 'yabomons/119.png',
    name: '占卜小精靈',
    description: '我是真預言家，3號金水。'
  },
{
    src: 'yabomons/120.png',
    name: '病病小精靈',
    description: '需要隔離！'
  },
  {
    src: 'yabomons/121.png',
    name: '蘿蔔小精靈',
    description:'拔呀拔呀拔呀拔呀～'
  },
  {
    src: 'yabomons/122.png',
    name: '礦工小精靈',
    description: '想挖出鑽石！'
  },
  {
    src: 'yabomons/123.png',
    name: '三花小精靈',
    description: '喵。'
  },
  {
    src: 'yabomons/124.png',
    name: '沖天炮小精靈',
    description: '在現實中非常醜的髮型。'
  },
  {
    src: 'yabomons/125.png',
    name: '渡假小精靈',
    description: '想過個悠閒的假期！'
  },
];

export default imageList;