const geographyData = {
  // 世界の地名データ
  worldLocations: {
    continents: {
      title: "６大陸",
      data: [
        {
          name: "ユーラシア大陸",
          description: "世界最大の大陸で、ヨーロッパとアジアがある巨大な陸地"
        },
        {
          name: "アフリカ大陸",
          description: "サハラ砂漠があり、人類発祥の地として知られる大陸"
        },
        {
          name: "北アメリカ大陸",
          description: "アメリカとカナダがある、五大湖で有名な大陸"
        },
        {
          name: "南アメリカ大陸",
          description: "アマゾン川が流れ、ブラジルやアルゼンチンがある大陸"
        },
        {
          name: "オーストラリア大陸",
          description: "コアラとカンガルーの国、世界最小の大陸"
        },
        {
          name: "南極大陸",
          description: "氷に覆われた世界最南端の大陸、ペンギンの住処"
        }
      ]
    },
    oceans: {
      title: "３大洋",
      data: [
        {
          name: "太平洋",
          description: "日本の東側にある世界最大の海、環太平洋造山帯に囲まれる"
        },
        {
          name: "大西洋",
          description: "ヨーロッパとアメリカの間にある、タイタニック号で有名な海"
        },
        {
          name: "インド洋",
          description: "インドの南側にある、季節風の影響を強く受ける海"
        }
      ]
    },
    mountainRanges: {
      title: "造山帯",
      data: [
        {
          name: "環太平洋造山帯",
          description: "太平洋を囲む火山と地震の多い地帯、日本も含まれる"
        },
        {
          name: "アルプス・ヒマラヤ造山帯",
          description: "ヨーロッパからアジアへ続く山脈と地震帯"
        }
      ]
    },
    majorMountains: {
      title: "主な山脈",
      data: [
        {
          name: "ヒマラヤ山脈",
          description: "世界最高峰エベレストがある、インドとチベットの境界"
        },
        {
          name: "アンデス山脈",
          description: "南アメリカ大陸西岸の長い山脈、高地でじゃがいも栽培"
        },
        {
          name: "ロッキー山脈",
          description: "北アメリカ大陸西部の山脈、カナダからアメリカまで続く"
        },
        {
          name: "アルプス山脈",
          description: "ヨーロッパの屋根、スイスの美しい山々で観光地として有名"
        }
      ]
    },
    riversAndSeas: {
      title: "川・海・砂漠など",
      data: [
        {
          name: "ナイル川",
          description: "世界最長の川、エジプトを流れ古代文明を育んだ母なる川"
        },
        {
          name: "アマゾン川",
          description: "世界最大の流域面積、ブラジルの熱帯雨林を流れる大河"
        },
        {
          name: "長江",
          description: "中国最長の川、揚子江とも呼ばれ中国文明の中心地を流れる"
        },
        {
          name: "黄河",
          description: "中国文明発祥の川、黄土の影響で黄色く濁っているのが特徴"
        },
        {
          name: "ライン川",
          description: "ヨーロッパの大動脈、ドイツの工業地帯を流れる国際河川"
        },
        {
          name: "サハラ砂漠",
          description: "世界最大の砂漠、アフリカ大陸北部の約3分の1を占める"
        },
        {
          name: "地中海",
          description: "ヨーロッパ・アフリカ・アジアに囲まれた古代文明の海"
        },
        {
          name: "ペルシャ湾",
          description: "世界最大の石油産出地域、中東の重要な海域"
        },
        {
          name: "五大湖",
          description: "北アメリカの5つの大きな湖、アメリカとカナダの国境付近"
        },
        {
          name: "北海",
          description: "ヨーロッパ北西部の海、北海油田で石油が採れる重要な海域"
        }
      ]
    }
  },

  // 日本の地名データ
  japanLocations: {
    rivers: {
      title: "主な川",
      data: [
        {
          name: "信濃川",
          description: "日本最長の川、新潟県を流れ日本海に注ぐ越後平野の母なる川"
        },
        {
          name: "利根川",
          description: "関東平野を流れる坂東太郎、首都圏の重要な水源"
        },
        {
          name: "筑後川",
          description: "九州最大の川、筑紫平野を流れ有明海に注ぐ九州三郎"
        },
        {
          name: "最上川",
          description: "山形県を流れる東北の川、松尾芭蕉の俳句でも有名"
        },
        {
          name: "北上川",
          description: "岩手県を流れる東北最大の川、三陸海岸近くで太平洋へ"
        },
        {
          name: "淀川",
          description: "琵琶湖から大阪湾へ流れる川、関西の水がめ琵琶湖と直結"
        }
      ]
    },
    plains: {
      title: "主な平野・盆地・台地",
      data: [
        {
          name: "関東平野",
          description: "日本最大の平野、首都東京を含む1都6県にまたがる大平野"
        },
        {
          name: "十勝平野",
          description: "北海道の畑作地帯、じゃがいもと小麦の一大産地"
        },
        {
          name: "筑紫平野",
          description: "九州最大の平野、福岡県南部の米作地帯"
        },
        {
          name: "越後平野",
          description: "新潟県の米どころ、信濃川が作った肥沃な稲作平野"
        },
        {
          name: "庄内平野",
          description: "山形県の米どころ、最上川下流の肥沃な水田地帯"
        },
        {
          name: "甲府盆地",
          description: "山梨県の中心地、ぶどうと桃の生産で全国1位の盆地"
        },
        {
          name: "根釧台地",
          description: "北海道東部の酪農地帯、広大な牧草地が広がる台地"
        },
        {
          name: "シラス台地",
          description: "鹿児島県の火山灰台地、水はけが良くさつまいも栽培"
        },
        {
          name: "フォッサマグナ",
          description: "本州を東西に分ける大地溝帯"
        }
      ]
    },
    mountains: {
      title: "主な山地・山脈など",
      data: [
        {
          name: "富士山",
          description: "日本最高峰3776m、静岡と山梨の県境にある独立峰"
        },
        {
          name: "日本アルプス",
          description: "本州中央部の3つの山脈、飛騨・木曽・赤石山脈の総称"
        },
        {
          name: "奥羽山脈",
          description: "東北地方の背骨、本州を太平洋側と日本海側に分ける"
        },
        {
          name: "阿蘇山",
          description: "熊本県の活火山、世界最大級のカルデラで有名な火山"
        },
        {
          name: "桜島",
          description: "鹿児島県の活火山、現在も活発に活動し灰を降らせる"
        },
        {
          name: "紀伊山地",
          description: "奈良・和歌山・三重にまたがる山地、熊野古道で有名"
        }
      ]
    },
    specialLocations: {
      title: "その他のよく出る地名",
      data: [
        {
          name: "琵琶湖",
          description: "日本最大の湖、滋賀県にある関西の水がめ"
        },
        {
          name: "白神山地",
          description: "青森・秋田の世界自然遺産、ブナの原生林で有名"
        },
        {
          name: "知床半島",
          description: "北海道の世界自然遺産、流氷とヒグマの楽園"
        },
        {
          name: "三陸海岸",
          description: "岩手県の複雑な海岸線、リアス海岸の代表例"
        },
        {
          name: "屋久島",
          description: "鹿児島県の世界自然遺産、縄文杉で有名な島"
        },
        {
          name: "小笠原諸島",
          description: "東京都の世界自然遺産、本土から1000km離れた島々"
        }
      ]
    },
    prefectureCapitals: {
      title: "県名と県庁所在地が異なる都市",
      data: [
        {
          name: "北海道",
          description: "県庁所在地は札幌市、北海道だけは道庁所在地と呼ぶ"
        },
        {
          name: "栃木県",
          description: "県庁所在地は宇都宮市、餃子で有名な北関東の中心都市"
        },
        {
          name: "神奈川県",
          description: "県庁所在地は横浜市、人口370万人の政令指定都市"
        },
        {
          name: "愛知県",
          description: "県庁所在地は名古屋市、中京工業地帯の中心都市"
        },
        {
          name: "三重県",
          description: "県庁所在地は津市、伊勢神宮で有名な県の小さな県都"
        },
        {
          name: "滋賀県",
          description: "県庁所在地は大津市、琵琶湖南端の古都で県名と異なる"
        },
        {
          name: "兵庫県",
          description: "県庁所在地は神戸市、港町として発展した国際都市"
        },
        {
          name: "愛媛県",
          description: "県庁所在地は松山市、道後温泉で有名な四国最大の都市"
        }
      ]
    },
    areaAndPopulation: {
      title: "面積と人口でみる都道府県",
      data: [
        {
          name: "北海道",
          description: "面積1位、本州の約4割の広さを持つ日本最大の都道府県"
        },
        {
          name: "岩手県",
          description: "面積2位、本州では最も広く北海道に次ぐ面積を誇る"
        },
        {
          name: "福島県",
          description: "面積3位、東北地方最大の面積を持つ太平洋側の県"
        },
        {
          name: "香川県",
          description: "面積最小、四国の北東部にある日本で最も小さな県"
        },
        {
          name: "東京都",
          description: "人口1位、1400万人が住む日本の首都で人口密度も最高"
        },
        {
          name: "神奈川県",
          description: "人口2位、横浜・川崎などの大都市を抱える首都圏の県"
        },
        {
          name: "大阪府",
          description: "人口3位、関西の中心で人口密度は東京に次いで2位"
        },
        {
          name: "鳥取県",
          description: "人口最少、約55万人で日本で最も人口の少ない県"
        }
      ]
    },
    otherCities: {
      title: "その他のよく出る市町村",
      data: [
        {
          name: "豊田市",
          description: "愛知県、トヨタ自動車の本社がある自動車工業の街"
        },
        {
          name: "嬬恋村",
          description: "群馬県、高原キャベツの生産量日本一の高冷地農業の村"
        },
        {
          name: "浜松市",
          description: "静岡県、ヤマハ・スズキ・ホンダ発祥の楽器と輸送機器の街"
        },
        {
          name: "水俣市",
          description: "熊本県、水俣病の発生地として公害問題で学ぶ重要な都市"
        },
        {
          name: "北九州市",
          description: "福岡県、八幡製鉄所があった重工業都市で政令指定都市"
        },
        {
          name: "倉敷市",
          description: "岡山県、水島工業地域の中心で石油化学コンビナートが有名"
        }
      ]
    }
  },

  // 地理用語（自然・暮らし）
  naturalAndLifestyle: {
    specialTopography: {
      title: "特色ある地形",
      data: [
        {
          name: "リアス海岸",
          description: "山地が沈降してできた複雑な海岸線、三陸海岸が代表例"
        },
        {
          name: "フィヨルド",
          description: "氷河が削った深い入り江、ノルウェーの海岸で有名"
        }
      ]
    },
    climateAndWeather: {
      title: "世界と日本の気候",
      data: [
        {
          name: "季節風",
          description: "季節によって風向きが変わる風、アジアの気候を大きく左右"
        },
        {
          name: "偏西風",
          description: "中緯度地帯で西から東に吹く風、日本の天気を左右する"
        },
        {
          name: "やませ",
          description: "夏に東北太平洋側に吹く冷たく湿った風、冷害の原因"
        },
        {
          name: "潮目",
          description: "性質の異なる海流がぶつかる境界、好漁場となることが多い"
        },
        {
          name: "黒潮（日本海流）",
          description: "日本の太平洋側を北上する暖流、幅広い影響を与える"
        },
        {
          name: "親潮（千島海流）",
          description: "北海道沖を南下する寒流、豊富な栄養で魚が豊富"
        },
        {
          name: "対馬海流",
          description: "黄海から日本海に入る暖流、黒潮の分岐流"
        },
        {
          name: "リマン海流",
          description: "オホーツク海沿岸を南下する寒流、親潮の一部"
        }
      ]
    },
    worldReligions: {
      title: "世界の宗教",
      data: [
        {
          name: "キリスト教",
          description: "世界最大の宗教、約24億人が信仰しヨーロッパ・アメリカで多数"
        },
        {
          name: "イスラム教",
          description: "世界第2位の宗教、約19億人が信仰し中東・アフリカで多数"
        },
        {
          name: "ヒンドゥー教",
          description: "インドの主要宗教、約11億人が信仰し牛を神聖視"
        },
        {
          name: "仏教",
          description: "アジア各国で信仰、約5億人で日本・タイ・ミャンマーなどで多数"
        },
        {
          name: "神道",
          description: "日本固有の宗教、自然や祖先を敬う多神教で神社が中心"
        }
      ]
    },
    populationAndEthnic: {
      title: "世界と日本の人口・民族",
      data: [
        {
          name: "漢民族",
          description: "中国の人口の9割を占める最大民族、世界最大の民族集団"
        },
        {
          name: "ヒスパニック",
          description: "アメリカの中南米系住民、スペイン語を話す人々の総称"
        },
        {
          name: "アボリジニ",
          description: "オーストラリアの先住民、独特の文化を持つ狩猟採集民"
        },
        {
          name: "一人っ子政策",
          description: "中国の人口抑制政策、1979年から2015年まで実施"
        },
        {
          name: "過密",
          description: "人口密度が高すぎる状態、都市部で住宅・交通問題が発生"
        },
        {
          name: "過疎",
          description: "人口が減少し地域機能が低下、山間部や離島で深刻な問題"
        }
      ]
    },
    naturalDisasters: {
      title: "日本の近年の自然災害",
      data: [
        {
          name: "雲仙岳噴火",
          description: "1991年長崎県、火砕流で大きな被害を出した火山災害"
        },
        {
          name: "阪神・淡路大震災",
          description: "1995年兵庫県南部地震、都市直下型地震の恐ろしさを示した"
        },
        {
          name: "有珠山噴火",
          description: "2000年北海道、火山活動予測に成功し住民避難が実現"
        },
        {
          name: "東日本大震災",
          description: "2011年東北地方太平洋沖地震、津波による甚大な被害"
        },
        {
          name: "熊本地震",
          description: "2016年熊本県を中心とした地震、活断層型で2回の大きな揺れ"
        }
      ]
    }
  },

  // 農業・漁業用語
  agricultureAndFishery: {
    europeanAgriculture: {
      title: "ヨーロッパの農業",
      data: [
        {
          name: "混合農業",
          description: "穀物栽培と家畜飼育を組み合わせた、ヨーロッパの代表的農業"
        },
        {
          name: "酪農",
          description: "乳牛を飼育し牛乳・乳製品を生産、北海道やデンマークが有名"
        },
        {
          name: "地中海式農業",
          description: "夏乾燥冬温暖の気候を活かし、オリーブやぶどうを栽培"
        }
      ]
    },
    worldAgriculture: {
      title: "世界のその他の地域の農業",
      data: [
        {
          name: "プランテーション",
          description: "熱帯地域の大規模農園、単一作物を輸出目的で栽培"
        },
        {
          name: "モノカルチャー経済",
          description: "単一作物に依存する経済、価格変動に弱い構造"
        },
        {
          name: "適地適作",
          description: "その土地の自然条件に最も適した作物を栽培する農業"
        },
        {
          name: "二期作",
          description: "1年に同じ作物を2回栽培、温暖な気候を活かした農法"
        },
        {
          name: "二毛作",
          description: "1年に異なる作物を2回栽培、土地を有効活用する農法"
        }
      ]
    },
    majorCrops: {
      title: "主な農作物",
      data: [
        {
          name: "小麦",
          description: "世界三大穀物の一つ、パンの原料で温帯の乾燥地域で栽培"
        },
        {
          name: "さとうきび",
          description: "砂糖の原料、熱帯・亜熱帯地域で栽培される多年草"
        },
        {
          name: "カカオ",
          description: "チョコレートの原料、赤道付近の高温多湿地域で栽培"
        },
        {
          name: "オリーブ",
          description: "地中海沿岸の代表作物、オイルや実を食用にする"
        }
      ]
    },
    japanAgriculture: {
      title: "日本の農業",
      data: [
        {
          name: "近郊農業",
          description: "大都市周辺で行う農業、新鮮な野菜を都市部に供給"
        },
        {
          name: "促成栽培",
          description: "ビニールハウスなどで成長を早める栽培、出荷時期を早める"
        },
        {
          name: "抑制栽培",
          description: "高冷地や冷房で成長を遅らせる栽培、出荷時期を遅らせる"
        },
        {
          name: "施設園芸農業",
          description: "ビニールハウスなど施設を使う農業、天候に左右されない"
        }
      ]
    },
    agriculturalTerms: {
      title: "農業に関する用語",
      data: [
        {
          name: "食料自給率",
          description: "国内で消費する食料の国内生産割合、日本は約38%と低い"
        },
        {
          name: "減反政策",
          description: "米の生産調整政策、米余りを解消するため作付面積を制限"
        },
        {
          name: "転作",
          description: "米以外の作物に切り替える農業政策、大豆や野菜への転換"
        },
        {
          name: "客土",
          description: "土壌改良のため他所から良い土を運び入れること"
        },
        {
          name: "輪作",
          description: "同じ土地で異なる作物を順番に栽培、土壌の養分を保つ農法"
        },
        {
          name: "品種改良",
          description: "より良い品種を作り出す技術、収量増加や品質向上が目的"
        }
      ]
    },
    aquaculture: {
      title: "育てる漁業",
      data: [
        {
          name: "養殖漁業",
          description: "魚介類を人工的に育てる漁業、ハマチ・ホタテ・のりなど"
        },
        {
          name: "栽培漁業",
          description: "稚魚を育てて海に放流し成長後に漁獲、資源保護も目的"
        }
      ]
    }
  },

  // 鉱工業用語
  miningAndIndustry: {
    americanIndustry: {
      title: "アメリカの工業地域・鉱山資源・都市",
      data: [
        {
          name: "デトロイト",
          description: "自動車工業の中心地、GM・フォード・クライスラーの本社"
        },
        {
          name: "シリコンバレー",
          description: "IT産業の聖地、カリフォルニア州のハイテク企業集積地"
        },
        {
          name: "ヒューストン",
          description: "石油化学工業の中心、NASA宇宙センターでも有名"
        },
        {
          name: "ニューヨーク",
          description: "アメリカ最大の都市、金融・商業・文化の中心地"
        },
        {
          name: "サンベルト",
          description: "アメリカ南部の工業地帯、温暖な気候で人口・産業が成長"
        },
        {
          name: "メサビ鉄山",
          description: "五大湖周辺の大鉄山、アメリカ鉄鋼業の原料供給地"
        },
        {
          name: "アパラチア炭田",
          description: "アメリカ東部の大炭田、石炭の一大産出地域"
        }
      ]
    },
    asianEuIndustry: {
      title: "アジア・EUの工業",
      data: [
        {
          name: "BRICS",
          description: "ブラジル・ロシア・インド・中国・南アフリカの新興5カ国"
        },
        {
          name: "アジアNIES",
          description: "韓国・台湾・香港・シンガポールの新興工業地域"
        },
        {
          name: "経済特区",
          description: "中国の対外開放政策、外国企業誘致のための特別地域"
        },
        {
          name: "情報技術産業",
          description: "IT産業、コンピューター・ソフトウェア関連の産業"
        },
        {
          name: "ルール工業地域",
          description: "ドイツ最大の工業地域、石炭と鉄鋼業で発展"
        },
        {
          name: "北海油田",
          description: "北海で採掘される石油、イギリス・ノルウェーが主な産出国"
        },
        {
          name: "ユーロポート",
          description: "オランダ・ロッテルダムの巨大港湾、ヨーロッパの玄関口"
        }
      ]
    },
    japanIndustry: {
      title: "日本の工業地帯・地域",
      data: [
        {
          name: "中京工業地帯",
          description: "愛知県中心、自動車・航空機産業で日本最大の工業生産額"
        },
        {
          name: "京浜工業地帯",
          description: "東京・神奈川、機械・化学工業中心の首都圏工業地帯"
        },
        {
          name: "阪神工業地帯",
          description: "大阪・兵庫、鉄鋼・化学・機械工業の関西の中核"
        },
        {
          name: "瀬戸内工業地域",
          description: "岡山・広島中心、石油化学コンビナートが発達"
        },
        {
          name: "北九州工業地域",
          description: "福岡県北部、八幡製鉄所を中心とした重工業地域"
        },
        {
          name: "太平洋ベルト",
          description: "東海道沿いの工業地帯群、日本の工業生産の大部分を担う"
        }
      ]
    },
    industryTerms: {
      title: "工業に関する用語",
      data: [
        {
          name: "石油化学コンビナート",
          description: "石油を原料とする化学工場群、効率的な生産体制"
        },
        {
          name: "IC（集積回路）",
          description: "半導体の基幹部品、電子機器に欠かせない重要部品"
        },
        {
          name: "貿易摩擦",
          description: "輸出入の不均衡による国際問題、日米間で深刻化した"
        },
        {
          name: "産業の空洞化",
          description: "製造業の海外移転、国内産業基盤の弱体化問題"
        },
        {
          name: "伝統工芸品",
          description: "地域の歴史ある手工業製品、文化的価値の高い産業"
        }
      ]
    },
    miningAndEnergy: {
      title: "鉱業・エネルギーに関する用語",
      data: [
        {
          name: "レアメタル",
          description: "希少金属、ハイテク産業に不可欠だが産出国が限定的"
        },
        {
          name: "再生可能エネルギー",
          description: "太陽光・風力など枯渇しない自然エネルギー"
        },
        {
          name: "バイオ燃料",
          description: "植物由来の燃料、環境に優しい代替エネルギー"
        }
      ]
    }
  },

  // その他の地理用語
  otherGeographyTerms: {
    earthPosition: {
      title: "地球上の位置",
      data: [
        {
          name: "赤道",
          description: "緯度0度の線、地球を南北に二分する最も長い緯線"
        },
        {
          name: "本初子午線",
          description: "経度0度の線、イギリス・グリニッジ天文台を通る基準線"
        },
        {
          name: "経度・経線",
          description: "東西の位置を示す縦の線、本初子午線からの角度で表示"
        },
        {
          name: "緯度・緯線",
          description: "南北の位置を示す横の線、赤道からの角度で表示"
        },
        {
          name: "回帰線",
          description: "北緯・南緯23.4度の線、太陽が真上に来る最北・最南の境界"
        }
      ]
    },
    japanPosition: {
      title: "日本の位置と範囲",
      data: [
        {
          name: "排他的経済水域",
          description: "沿岸から200海里の海域、その国が漁業権などを持つ"
        },
        {
          name: "北方領土",
          description: "択捉・国後・色丹・歯舞、ロシアが実効支配する日本固有の領土"
        },
        {
          name: "南鳥島",
          description: "日本最東端の島、小笠原諸島の一部で気象観測所がある"
        },
        {
          name: "沖ノ鳥島",
          description: "日本最南端の島、満潮時にわずかに海面上に出る岩礁"
        },
        {
          name: "竹島",
          description: "島根県、韓国が実効支配するが日本が領有権を主張"
        },
        {
          name: "尖閣諸島",
          description: "沖縄県、中国が領有権を主張するが日本が実効支配"
        }
      ]
    },
    timeZone: {
      title: "世界と日本の時差",
      data: [
        {
          name: "標準時",
          description: "各国で定めた基準時刻、日本は東経135度の明石市が基準"
        },
        {
          name: "時差",
          description: "地域間の時刻の違い、経度15度で1時間の差が生じる"
        },
        {
          name: "日付変更線",
          description: "経度180度付近の線、ここを境に日付が1日変わる"
        }
      ]
    },
    transportation: {
      title: "日本の新幹線、主な空港・港",
      data: [
        {
          name: "東海道新幹線",
          description: "東京-新大阪間、1964年開業の世界初の高速鉄道"
        },
        {
          name: "上越新幹線",
          description: "東京-新潟間、本州を横断し日本海側へ向かう新幹線"
        },
        {
          name: "山陽新幹線",
          description: "新大阪-博多間、東海道新幹線の延長で九州へ向かう"
        },
        {
          name: "成田国際空港",
          description: "東京の国際空港、首都圏の空の玄関口"
        },
        {
          name: "関西国際空港",
          description: "大阪湾の人工島、24時間運用可能な国際空港"
        },
        {
          name: "中部国際空港",
          description: "愛知県常滑市、中京圏の国際空港でセントレアと呼ばれる"
        },
        {
          name: "名古屋港",
          description: "愛知県、貿易額日本一の国際貿易港"
        }
      ]
    },
    environmentalProblems: {
      title: "日本の公害・環境問題",
      data: [
        {
          name: "水俣病",
          description: "熊本県水俣市、メチル水銀による深刻な公害病"
        },
        {
          name: "四日市ぜんそく",
          description: "三重県四日市市、大気汚染による呼吸器疾患"
        },
        {
          name: "赤潮",
          description: "海水の富栄養化、プランクトン大発生で魚介類が大量死"
        },
        {
          name: "持続可能な社会",
          description: "環境を破壊せず将来世代も豊かに暮らせる社会"
        }
      ]
    }
  },

  // 気候・暮らしに関する統計・資料
  climateAndLifestyle: {
    worldClimateZones: {
      title: "世界の気候帯",
      data: [
        {
          name: "熱帯",
          description: "年中高温の気候帯、赤道付近で年平均気温18度以上",
          subTypes: [
            {
              name: "熱帯雨林気候",
              description: "年中高温多雨、アマゾンやコンゴ盆地の密林気候"
            },
            {
              name: "サバナ気候",
              description: "乾季と雨季がある、アフリカの草原地帯の気候"
            }
          ]
        },
        {
          name: "乾燥帯",
          description: "降水量が少ない気候帯、砂漠やステップが広がる",
          subTypes: [
            {
              name: "砂漠気候",
              description: "年降水量250mm未満、サハラ砂漠やアタカマ砂漠"
            },
            {
              name: "ステップ気候",
              description: "年降水量250-500mm、草原が広がる半乾燥気候"
            }
          ]
        },
        {
          name: "温帯",
          description: "四季の変化がある気候帯、人間の生活に適した気候",
          subTypes: [
            {
              name: "温暖湿潤気候",
              description: "夏暑く冬温暖、日本の太平洋側や中国南部の気候"
            },
            {
              name: "西岸海洋性気候",
              description: "年中温暖湿潤、ヨーロッパ西部の海洋性気候"
            },
            {
              name: "地中海性気候",
              description: "夏乾燥冬温暖、地中海沿岸やカリフォルニアの気候"
            }
          ]
        },
        {
          name: "亜寒帯（冷帯）",
          description: "冬が長く厳しい、シベリアやカナダの針葉樹林気候"
        },
        {
          name: "寒帯",
          description: "年中寒冷な気候帯、南極や北極圏の氷雪に覆われた地域",
          subTypes: [
            {
              name: "ツンドラ気候",
              description: "夏短く冬長い、コケ類が生育する北極圏の気候"
            },
            {
              name: "氷雪気候",
              description: "年中氷点下、南極大陸やグリーンランドの極地気候"
            }
          ]
        }
      ]
    },
    japanClimate: {
      title: "日本の気候区分",
      data: [
        {
          name: "太平洋側の気候",
          description: "夏暑く冬乾燥、関東から九州の太平洋沿岸の気候"
        },
        {
          name: "日本海側の気候",
          description: "冬の降雪量が多い、季節風の影響を強く受ける"
        },
        {
          name: "瀬戸内の気候",
          description: "年中温暖少雨、中国山地に囲まれた盆地状の気候"
        },
        {
          name: "中央高地の気候",
          description: "内陸性で寒暖差大、長野県など山間部の高原気候"
        },
        {
          name: "北海道の気候",
          description: "冷涼で梅雨なし、亜寒帯に属する本州とは異なる気候"
        },
        {
          name: "南西諸島の気候",
          description: "亜熱帯性気候、沖縄など南の島々の高温多湿な気候"
        }
      ]
    },
    worldCulture: {
      title: "世界の住居・衣服",
      data: [
        {
          name: "ゲル",
          description: "モンゴルの移動式住居、遊牧民が使う円形のテント状住宅"
        },
        {
          name: "サリー",
          description: "インドの民族衣装、1枚の長い布を体に巻きつける女性の服"
        },
        {
          name: "チマ・チョゴリ",
          description: "朝鮮半島の民族衣装、チマは巻きスカート、チョゴリは上着"
        }
      ]
    }
  },

  // 農業・漁業に関する統計
  agricultureStatistics: {
    japanAgriculture: {
      title: "日本の農業統計",
      data: [
        {
          name: "米の生産",
          description: "新潟・北海道・秋田の順、米どころの代表県が上位"
        },
        {
          name: "乳牛の飼育頭数",
          description: "北海道が圧倒的1位、全国の約6割を占める酪農王国"
        },
        {
          name: "豚の飼育頭数",
          description: "鹿児島・宮崎・茨城の順、南九州が養豚の一大産地"
        },
        {
          name: "茶の生産",
          description: "静岡県が圧倒的1位、全国の約4割を生産する茶どころ"
        },
        {
          name: "りんごの生産",
          description: "青森県が全国の約6割、津軽りんごで有名な産地"
        },
        {
          name: "みかんの生産",
          description: "和歌山・愛媛・静岡の順、温暖な気候を活かした産地"
        },
        {
          name: "ももの生産",
          description: "山梨県が全国1位、甲府盆地の寒暖差を活かした栽培"
        },
        {
          name: "かきの生産",
          description: "広島県が全国1位、瀬戸内海の穏やかな海での養殖"
        }
      ]
    },
    japanFishery: {
      title: "日本の漁業の変化",
      data: [
        {
          name: "沖合漁業",
          description: "沿岸から200海里内、中型船で行う日本の主力漁業"
        },
        {
          name: "遠洋漁業",
          description: "200海里を超える海域、大型船でマグロ・カツオ漁"
        },
        {
          name: "養殖漁業",
          description: "人工的に魚介類を育成、安定供給と品質向上を実現"
        }
      ]
    },
    worldAgriculture: {
      title: "世界の農作物生産・輸出",
      data: [
        {
          name: "米の生産",
          description: "中国・インド・インドネシアの順、アジアが世界の9割生産"
        },
        {
          name: "米の輸出",
          description: "インド・タイ・ベトナムの順、生産国と輸出国は異なる"
        },
        {
          name: "小麦の生産",
          description: "中国・インド・ロシアの順、パンの原料で世界三大穀物"
        },
        {
          name: "とうもろこしの生産",
          description: "アメリカ・中国・ブラジルの順、飼料用が多い"
        },
        {
          name: "ぶどうの生産",
          description: "中国・イタリア・アメリカの順、ワイン用と生食用"
        },
        {
          name: "茶の生産",
          description: "中国・インド・ケニアの順、アジア・アフリカが主産地"
        }
      ]
    }
  },

  // 工業に関する統計
  industryStatistics: {
    japanIndustry: {
      title: "都道府県の工業生産額",
      data: [
        {
          name: "愛知県",
          description: "全国1位、トヨタ自動車を中心とした自動車産業の集積地"
        },
        {
          name: "千葉県",
          description: "京葉工業地域、石油化学コンビナートと鉄鋼業が盛ん"
        },
        {
          name: "東京都",
          description: "機械・印刷・食品工業、高付加価値製品の生産拠点"
        },
        {
          name: "北海道",
          description: "食品工業中心、豊富な農水産物を活かした加工業"
        }
      ]
    },
    industrialRegions: {
      title: "主な工業地帯・地域の工業生産額",
      data: [
        {
          name: "中京工業地帯",
          description: "全国1位、自動車産業を中心とした日本最大の工業地帯"
        },
        {
          name: "京浜工業地帯",
          description: "機械・化学工業、首都圏の巨大市場を背景に発展"
        },
        {
          name: "阪神工業地帯",
          description: "鉄鋼・化学・機械、関西経済圏の中核工業地帯"
        },
        {
          name: "京葉工業地域",
          description: "石油化学・鉄鋼、東京湾埋立地の臨海工業地域"
        },
        {
          name: "瀬戸内工業地域",
          description: "石油化学中心、瀬戸内海沿岸の工業地域群"
        },
        {
          name: "北関東工業地域",
          description: "自動車・機械、内陸型の工業地域として成長"
        },
        {
          name: "北九州工業地域",
          description: "鉄鋼・化学、八幡製鉄所を中心とした重工業地域"
        }
      ]
    },
    worldEnergy: {
      title: "世界の発電",
      data: [
        {
          name: "カナダ",
          description: "水力発電の割合が高い、豊富な水資源を活かした発電"
        },
        {
          name: "フランス",
          description: "原子力発電の割合が世界最高、電力の約7割を原発で供給"
        },
        {
          name: "アメリカ",
          description: "火力発電中心、石炭・天然ガス・石油による発電が主力"
        },
        {
          name: "日本",
          description: "火力発電が主力、原発事故後は再生可能エネルギーも拡大"
        }
      ]
    },
    worldResources: {
      title: "世界の鉱山資源の産出",
      data: [
        {
          name: "石油",
          description: "サウジアラビア・ロシア・アメリカの順、中東が世界最大の産油地"
        },
        {
          name: "石炭",
          description: "中国・インド・アメリカの順、中国が世界の約半分を産出"
        },
        {
          name: "鉄鉱石",
          description: "オーストラリア・ブラジル・中国の順、製鉄業の重要原料"
        }
      ]
    },
    worldProduction: {
      title: "世界の自動車・鉄鋼の生産",
      data: [
        {
          name: "自動車の生産",
          description: "中国・アメリカ・日本の順、中国が世界最大の生産国"
        },
        {
          name: "鉄鋼の生産",
          description: "中国・インド・日本の順、中国が世界の約半分を生産"
        }
      ]
    }
  },

  // 人口・交通・貿易に関する統計
  populationTransportTrade: {
    populationPyramid: {
      title: "日本の人口ピラミッド",
      data: [
        {
          name: "富士山型",
          description: "高度成長期の人口構成、出生率高く若年層が多い三角形"
        },
        {
          name: "つりがね型",
          description: "現在の人口構成、少子高齢化で中高年層が厚い釣鐘形"
        },
        {
          name: "つぼ型",
          description: "将来予想される人口構成、少子化進行で若年層が極端に少ない"
        }
      ]
    },
    transportationChanges: {
      title: "日本国内の輸送割合",
      data: [
        {
          year: "1960年",
          freight: "鉄道が主力、重い荷物は汽車で運ぶ時代",
          passenger: "鉄道中心、マイカー普及前で電車・汽車が交通手段"
        },
        {
          year: "2024年",
          freight: "トラック輸送が9割、宅配便の普及で陸運が主力",
          passenger: "自動車が6割、マイカー社会で車中心の移動"
        }
      ]
    },
    tradeChanges: {
      title: "日本の輸出入品",
      data: [
        {
          year: "1960年",
          exports: "繊維製品中心、安い労働力を活かした軽工業製品",
          imports: "原料・燃料中心、工業原料と石油などエネルギー資源"
        },
        {
          year: "2024年",
          exports: "自動車・機械類、高い技術力を活かした工業製品",
          imports: "原料・燃料・食料、エネルギーと食料の海外依存継続"
        }
      ]
    },
    importSources: {
      title: "日本の主な輸入品の輸入先",
      data: [
        {
          name: "石油",
          description: "サウジアラビア・UAE・クウェート、中東依存度が高い"
        },
        {
          name: "石炭",
          description: "オーストラリア・インドネシア・ロシア、火力発電の燃料"
        },
        {
          name: "鉄鉱石",
          description: "オーストラリア・ブラジル、製鉄業に不可欠な原料"
        },
        {
          name: "小麦",
          description: "アメリカ・カナダ・オーストラリア、パン・麺類の原料"
        },
        {
          name: "木材",
          description: "カナダ・ロシア・マレーシア、建築材料として大量輸入"
        },
        {
          name: "衣類",
          description: "中国・ベトナム・バングラデシュ、安い労働力の国から輸入"
        }
      ]
    },
    tradePartners: {
      title: "日本の貿易相手国",
      data: [
        {
          name: "輸出",
          description: "中国・アメリカ・韓国の順、アジア向けが全体の約6割"
        },
        {
          name: "輸入",
          description: "中国・アメリカ・オーストラリアの順、中国が最大の貿易相手国"
        }
      ]
    },
    malaysiaExports: {
      title: "マレーシアの輸出品の変化",
      data: [
        {
          year: "1980年",
          description: "天然ゴム・スズ・パーム油、天然資源に依存したモノカルチャー"
        },
        {
          year: "2024年",
          description: "電子部品・石油製品・パーム油、工業化進展で製品多様化"
        }
      ]
    }
  },

  // よく出る分布図、地形図
  mapsAndTopography: {
    americanAgriculture: {
      title: "アメリカの農業地域",
      data: [
        {
          name: "とうもろこし地帯",
          description: "中西部、五大湖南方の肥沃な土壌で世界最大の産地"
        },
        {
          name: "小麦地帯",
          description: "中央部、グレートプレーンズの大平原で大規模機械化農業"
        },
        {
          name: "綿花地帯",
          description: "南東部、温暖湿潤気候を活かした伝統的な商品作物栽培"
        },
        {
          name: "酪農地帯",
          description: "北東部・五大湖周辺、冷涼な気候で牧草栽培と乳牛飼育"
        }
      ]
    },
    chineseAgriculture: {
      title: "中国の農業地域",
      data: [
        {
          name: "稲作",
          description: "南部、長江流域の温暖湿潤な気候で水田稲作が発達"
        },
        {
          name: "小麦",
          description: "北部、華北平原の温帯気候で畑作農業の中心作物"
        },
        {
          name: "畑作",
          description: "北東部、大豆・とうもろこしなど寒冷地に適した作物栽培"
        },
        {
          name: "茶",
          description: "南部山地、温暖多雨な丘陵地で世界最大の茶葉生産"
        },
        {
          name: "綿花",
          description: "新疆ウイグル、乾燥地域の灌漑農業で良質な綿花栽培"
        }
      ]
    },
    japanIndustryDistribution: {
      title: "日本の石油化学コンビナートと自動車工場の分布",
      data: [
        {
          name: "石油化学コンビナート",
          description: "太平洋ベルト沿い、原油輸入に便利な臨海部に立地"
        },
        {
          name: "自動車工場",
          description: "中京・関東・九州、部品工場との連携で内陸部にも分散"
        },
        {
          name: "製鉄所",
          description: "太平洋ベルト沿い、原料輸入と製品出荷に便利な臨海部"
        },
        {
          name: "IC工場",
          description: "九州・東北、シリコンアイランド・シリコンロードと呼ばれる"
        }
      ]
    },
    topographicReading: {
      title: "等高線と土地の傾斜",
      data: [
        {
          name: "等高線の読み方",
          description: "等高線の間隔で傾斜判断、狭いほど急斜面で密なほど険しい"
        },
        {
          name: "縮尺と方位",
          description: "地図の縮尺理解と正確な方位読み取り、距離計算の基礎"
        }
      ]
    },
    specialLandforms: {
      title: "特色ある地形",
      data: [
        {
          name: "扇状地",
          description: "山地から平地への出口、川が運んだ土砂が扇形に堆積した地形"
        },
        {
          name: "三角州",
          description: "河口付近、川が運んだ土砂が海で堆積し三角形状になった地形"
        }
      ]
    }
  },

  // 検索機能用のメタデータ
  metadata: {
    totalEntries: 0,
    categories: [
      "世界の地名",
      "日本の地名", 
      "自然・暮らし",
      "農業・漁業",
      "鉱工業",
      "その他の地理用語",
      "気候・暮らし統計",
      "農業・漁業統計",
      "工業統計",
      "人口・交通・貿易統計",
      "分布図・地形図"
    ],
    lastUpdated: "2025-06-04"
  }
};

// 検索機能
const searchGeography = (keyword) => {
  const results = [];
  const searchTerm = keyword.toLowerCase();
  
  // 再帰的に全データを検索
  const searchInObject = (obj, category = "") => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (obj[key].title && obj[key].data) {
          // データセクションの場合
          obj[key].data.forEach(item => {
            if (item.name && item.name.toLowerCase().includes(searchTerm) ||
                item.description && item.description.toLowerCase().includes(searchTerm)) {
              results.push({
                name: item.name,
                description: item.description,
                category: obj[key].title,
                section: category
              });
            }
          });
        } else {
          // ネストされたオブジェクトの場合
          searchInObject(obj[key], key);
        }
      }
    }
  };
  
  searchInObject(geographyData);
  return results;
};

// カテゴリ別データ取得機能
const getDataByCategory = (category) => {
  const categoryMap = {
    "世界の地名": geographyData.worldLocations,
    "日本の地名": geographyData.japanLocations,
    "自然・暮らし": geographyData.naturalAndLifestyle,
    "農業・漁業": geographyData.agricultureAndFishery,
    "鉱工業": geographyData.miningAndIndustry,
    "その他の地理用語": geographyData.otherGeographyTerms,
    "気候・暮らし統計": geographyData.climateAndLifestyle,
    "農業・漁業統計": geographyData.agricultureStatistics,
    "工業統計": geographyData.industryStatistics,
    "人口・交通・貿易統計": geographyData.populationTransportTrade,
    "分布図・地形図": geographyData.mapsAndTopography
  };
  
  return categoryMap[category] || null;
};

// ランダムクイズ生成機能
const generateRandomQuiz = () => {
  const allItems = [];
  
  // 全データからアイテムを収集
  const collectItems = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (obj[key].title && obj[key].data) {
          obj[key].data.forEach(item => {
            if (item.name && item.description) {
              allItems.push({
                name: item.name,
                description: item.description,
                category: obj[key].title
              });
            }
          });
        } else {
          collectItems(obj[key]);
        }
      }
    }
  };
  
  collectItems(geographyData);
  
  if (allItems.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * allItems.length);
  return allItems[randomIndex];
};

// 学習進捗管理機能
const createLearningTracker = () => {
  let studiedItems = new Set();
  let correctAnswers = 0;
  let totalQuestions = 0;
  
  return {
    markAsStudied: (itemName) => {
      studiedItems.add(itemName);
    },
    
    recordAnswer: (isCorrect) => {
      totalQuestions++;
      if (isCorrect) correctAnswers++;
    },
    
    getProgress: () => {
      return {
        studiedCount: studiedItems.size,
        accuracy: totalQuestions > 0 ? (correctAnswers / totalQuestions * 100).toFixed(1) : 0,
        totalQuestions: totalQuestions
      };
    },
    
    getUnstudiedItems: (category = null) => {
      const allItems = [];
      const collectItems = (obj) => {
        for (const key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (obj[key].title && obj[key].data) {
              if (!category || obj[key].title === category) {
                obj[key].data.forEach(item => {
                  if (item.name && !studiedItems.has(item.name)) {
                    allItems.push({
                      name: item.name,
                      description: item.description,
                      category: obj[key].title
                    });
                  }
                });
              }
            } else {
              collectItems(obj[key]);
            }
          }
        }
      };
      
      collectItems(geographyData);
      return allItems;
    },
    
    reset: () => {
      studiedItems.clear();
      correctAnswers = 0;
      totalQuestions = 0;
    }
  };
};

// 重要度別学習機能
const getItemsByImportance = (level = "basic") => {
  const importanceKeywords = {
    basic: ["大陸", "海", "川", "山脈", "平野", "工業地帯", "気候"],
    intermediate: ["造山帯", "海流", "貿易", "人口", "農業", "漁業", "交通"],
    advanced: ["コンビナート", "統計", "分布", "変化", "問題", "政策"]
  };
  
  const keywords = importanceKeywords[level] || importanceKeywords.basic;
  const results = [];
  
  keywords.forEach(keyword => {
    const searchResults = searchGeography(keyword);
    results.push(...searchResults);
  });
  
  // 重複を除去
  const uniqueResults = results.filter((item, index, self) => 
    index === self.findIndex(t => t.name === item.name)
  );
  
  return uniqueResults;
};

// データ統計情報計算
const calculateStatistics = () => {
  let totalItems = 0;
  const categoryStats = {};
  
  const countItems = (obj, currentCategory = "") => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (obj[key].title && obj[key].data) {
          const count = obj[key].data.length;
          totalItems += count;
          
          if (!categoryStats[currentCategory]) {
            categoryStats[currentCategory] = 0;
          }
          categoryStats[currentCategory] += count;
        } else {
          countItems(obj[key], key);
        }
      }
    }
  };
  
  countItems(geographyData);
  
  return {
    totalItems,
    categoryStats,
    averageItemsPerCategory: Math.round(totalItems / Object.keys(categoryStats).length)
  };
};

// 学習推奨システム
const getRecommendedStudyPlan = (studentLevel = "middle", timeAvailable = 30) => {
  const recommendations = {
    beginner: {
      priority: ["世界の地名", "日本の地名", "自然・暮らし"],
      itemsPerSession: 10,
      reviewFrequency: 3
    },
    middle: {
      priority: ["農業・漁業", "鉱工業", "気候・暮らし統計"],
      itemsPerSession: 15,
      reviewFrequency: 2
    },
    advanced: {
      priority: ["工業統計", "人口・交通・貿易統計", "分布図・地形図"],
      itemsPerSession: 20,
      reviewFrequency: 1
    }
  };
  
  const plan = recommendations[studentLevel] || recommendations.middle;
  const sessionsNeeded = Math.ceil(timeAvailable / (plan.itemsPerSession * 2)); // 2分/項目と仮定
  
  return {
    recommendedCategories: plan.priority,
    itemsPerSession: plan.itemsPerSession,
    estimatedSessions: sessionsNeeded,
    reviewFrequency: `${plan.reviewFrequency}日に1回`,
    totalStudyTime: `約${timeAvailable}分`
  };
};

// エクスポート用オブジェクト
const GeographyLearningSystem = {
  data: geographyData,
  search: searchGeography,
  getCategory: getDataByCategory,
  generateQuiz: generateRandomQuiz,
  createTracker: createLearningTracker,
  getByImportance: getItemsByImportance,
  getStats: calculateStatistics,
  getStudyPlan: getRecommendedStudyPlan,
  
  // 便利なヘルパー関数
  helpers: {
    // 全カテゴリ名を取得
    getAllCategories: () => {
      return Object.keys(geographyData).map(key => {
        const category = geographyData[key];
        if (typeof category === 'object') {
          return Object.keys(category).map(subKey => {
            if (category[subKey].title) {
              return category[subKey].title;
            }
          }).filter(Boolean);
        }
      }).flat().filter(Boolean);
    },
    
    // 特定の地域に関する情報を取得
    getRegionInfo: (regionName) => {
      const results = searchGeography(regionName);
      return results.filter(item => 
        item.name.includes(regionName) || 
        item.description.includes(regionName)
      );
    },
    
    // 統計データのみを取得
    getStatisticsOnly: () => {
      return {
        agriculture: geographyData.agricultureStatistics,
        industry: geographyData.industryStatistics,
        population: geographyData.populationTransportTrade
      };
    },
    
    // 地形・自然地理のみを取得
    getNaturalGeography: () => {
      return {
        world: geographyData.worldLocations,
        japan: geographyData.japanLocations,
        natural: geographyData.naturalAndLifestyle,
        climate: geographyData.climateAndLifestyle
      };
    },
    
    // 人文地理のみを取得
    getHumanGeography: () => {
      return {
        agriculture: geographyData.agricultureAndFishery,
        industry: geographyData.miningAndIndustry,
        population: geographyData.populationTransportTrade,
        maps: geographyData.mapsAndTopography
      };
    }
  }
};

// 最終的な統計情報をメタデータに追加
geographyData.metadata.totalEntries = calculateStatistics().totalItems;

// Node.js環境での使用を考慮
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GeographyLearningSystem;
}

// ブラウザ環境での使用を考慮
if (typeof window !== 'undefined') {
  window.GeographyLearningSystem = GeographyLearningSystem;
}

// 使用例とドキュメント
const usageExamples = {
  basicSearch: `
    // 基本的な検索
    const results = GeographyLearningSystem.search("日本");
    console.log(results);
  `,
  
  categoryAccess: `
    // カテゴリ別データ取得
    const worldData = GeographyLearningSystem.getCategory("世界の地名");
    console.log(worldData);
  `,
  
  quizGeneration: `
    // ランダムクイズ生成
    const quiz = GeographyLearningSystem.generateQuiz();
    console.log("問題:", quiz.name);
    console.log("答え:", quiz.description);
  `,
  
  learningTracker: `
    // 学習進捗管理
    const tracker = GeographyLearningSystem.createTracker();
    tracker.markAsStudied("富士山");
    tracker.recordAnswer(true);
    console.log(tracker.getProgress());
  `,
  
  studyPlan: `
    // 学習計画作成
    const plan = GeographyLearningSystem.getStudyPlan("middle", 45);
    console.log(plan);
  `,
  
  statistics: `
    // データ統計情報
    const stats = GeographyLearningSystem.getStats();
    console.log("総項目数:", stats.totalItems);
  `
};

console.log("地理学習システムが正常に読み込まれました。");
console.log("使用可能な機能:", Object.keys(GeographyLearningSystem));
console.log("総データ項目数:", geographyData.metadata.totalEntries);