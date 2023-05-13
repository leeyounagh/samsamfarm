type FlowerImgType = {
  flower: string;
  name: string;
  id: number;
  story1: string;
  story2: string;
  mbti: string;
  character: string;
};

const FlowerImg: FlowerImgType[] = [
  {
    character: "/public/asset/istj.png",
    mbti: "ISTJ",
    flower: "/public/asset/벚꽃.gif",
    name: "벚꽃",
    story1:
      "벚꽃은 예민하고 감성적인 아름다움을 상징하며,  내적인 세계와 감정에 민감하며 깊이 있게 반응하는 경향이 있습니다. ",
    story2:
      "벚꽃의 순수한 아름다움과 잠재적인 허약함은 당신의 성격과 어울립니다. 또한,  창의적인 아이디어와 새로운 가능성을 탐구하고 변화에 유연하게 대처하는 특징을 가지고 있습니다.",
    id: 0,
  },
  {
    character: "/public/asset/isfj.png",
    mbti: "ISFJ",
    flower: "/public/asset/장미.png",
    name: "장미",
    story1:
      "당신은 사랑과 열정을 표현하는 데 능숙한 사람으로 장미와 관련짓기에 적합합니다.",
    story2:
      " 장미의 아름다움과 다양한 색상을 즐기며, 사랑과 로맨스에 대한 감성적인 면을 중요시하는 경향이 있습니다. 그들은 주변 사람들과의 인터랙션을 즐기며 사랑의 표현과 사회적인 관계를 중시하는 특징을 가지고 있습니다.",
    id: 1,
  },
  {
    character: "/public/asset/infj.png",
    mbti: "INFJ",
    flower: "/public//asset/해바라기.png",
    name: "해바라기",
    story1:
      " 해바라기는 태양을 따라 회전하는 특징을 가지고 있으며,  활동적이고 에너지가 넘치는 성격으로 알려져 있습니다. ",
    story2:
      "그들은 적응력이 뛰어나고 현재의 순간을 즐기는 경향이 있으며, 목표를 향해 자신을 이끌고 적극적으로 행동합니다.",
    id: 2,
  },
  {
    character: "/public/asset/intj.png",
    mbti: "INTJ",
    flower: "/public//asset/5번꽃.png",
    name: "아메시아",
    story1:
      "아메시아는 심오하고 정신적인 에너지를 상징합니다. 당신은 진심과 동정심으로 주변 사람들을 이해하고 지원하는 경향이 있습니다.",
    story2:
      "마치 아메시아가 깊은 내면의 에너지를 품고 있듯이, 당신은 내적 세계와 감정을 깊이 생각하고 탐구합니다",
    id: 3,
  },
  {
    character: "/public/asset/istp.png",
    mbti: "ISTP",
    flower: "/public/asset/선인장.png",
    name: "선인장",
    story1: "선인장은 독특한 형태와 내구성을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 뛰어난 기술과 감각을 가지고 있으며, 창의적인 방식으로 문제에 접근하는 경향이 있습니다. 선인장처럼 고독을 감내하면서도 내면의 자원을 활용하여 문제를 극복합니다.",
    id: 4,
  },
  {
    character: "/public/asset/isfp.png",
    mbti: "ISFP",
    flower: "/public/asset/5번꽃.png",
    name: "라일락",
    story1: "라일락은 감성적이고 아름다운 향기를 풍긴다는 점이 있습니다.",
    story2:
      " 당신은 깊은 감수성과 감정을 가진 사람으로, 라일락의 우아하고 로맨틱한 분위기를 선호할 수 있습니다. 그들은 자연의 아름다움과 깊은 감정을 소중히 여기며, 라일락의 향기에 공감할 수 있을 것입니다.",
    id: 5,
  },
  {
    character: "/public/asset/infp.png",
    mbti: "INFP",
    flower: "/public/asset/연꽃.png",
    name: "연꽃",
    story1:
      "연꽃은 아름다운 꽃잎을 물 위에 펼치는 모습으로 많은 사람들의 관심을 끌어옵니다. ",
    story2:
      "이와 유사하게 당신은 사회적이고 온정적인 성향을 가지고 있으며, 주변 사람들을 이끄는 능력을 갖추고 있습니다. 그들은 자신의 동료와 가족에게 사랑과 관심을 베푸는데 능숙하며, 연꽃과 같은 아름다움과 차분한 에너지를 표현할 수 있을 것입니다.",
    id: 6,
  },
  {
    character: "/public/asset/intp.png",
    mbti: "INTP",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 7,
  },
  {
    character: "/public/asset/estp.png",
    mbti: "ESTP",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 8,
  },
  {
    character: "/public/asset/esfp.png",
    mbti: "ESFP",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 9,
  },

  {
    character: "/public/asset/enfp.png",
    mbti: "ENFP",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 10,
  },
  {
    character: "/public/asset/estj.png",
    mbti: "ESTJ",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 11,
  },
  {
    character: "/public/asset/esfj.png",
    mbti: "ESFJ",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 12,
  },
  {
    character: "/public/asset/enfj.png",
    mbti: "ENFJ",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 13,
  },
  {
    character: "/public/asset/entj.png",
    mbti: "ENTJ",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 14,
  },
  {
    character: "/public/asset/entp.png",
    mbti: "ENTP",
    flower: "/public/asset/수수꽃다리.png",
    name: "수수꽃다리",
    story1: "수수꽃다리는 물 위에서 수평하게 펼쳐진 잎을 가지고 있습니다. ",
    story2:
      "당신은 문제 해결에 대한 실용적인 접근과 관찰력을 가지고 있으며, 수수꽃다리의 실용적인 형태와 조용한 아름다움에 공감할 수 있을 것입니다. 그들은 고요한 환경에서 자신만의 공간을 찾으며, 수수꽃다리의 조용한 아름다움을 즐길 수 있을 것입니다.",
    id: 15,
  },
];

export default FlowerImg;
