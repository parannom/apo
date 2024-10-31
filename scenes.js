const scenes = {
    "start": {
        "text": "시카고는 좀비들로 가득 차 있습니다. 지미는 샌드크릭으로 피신한 아내 린다를 찾아야 합니다. 어떻게 할까요?",
        "choices": [
            { "text": "도시를 빠져나갈 계획을 세운다.", "nextScene": "planEscape1" },
            { "text": "린다에게 연락을 시도한다.", "nextScene": "callLinda1" },
            { "text": "근처에 생존자가 있는지 찾아본다.", "nextScene": "searchSurvivors1" }
        ]
    },

    // 도시 빠져나가기 분기 (10개)
    "planEscape1": {
        "text": "지미는 도시를 빠져나가기 위한 계획을 세웁니다. 무엇을 우선 챙길까요?",
        "choices": [
            { "text": "무기와 방어구를 찾는다.", "nextScene": "findWeapons1" },
            { "text": "식량과 의약품을 모은다.", "nextScene": "gatherSupplies1" }
        ]
    },
    "findWeapons1": {
        "text": "지미는 무기를 찾기 위해 경찰서를 탐색합니다.",
        "choices": [
            { "text": "조용히 잠입한다.", "nextScene": "stealthPoliceStation1" },
            { "text": "정면 돌파한다.", "nextScene": "attackPoliceStation1" }
        ]
    },
    "stealthPoliceStation1": {
        "text": "잠입에 성공해 무기를 확보했습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "샌드크릭으로 바로 출발한다.", "nextScene": "startJourney1" },
            { "text": "식량과 의약품을 추가로 수집한다.", "nextScene": "gatherSupplies2" }
        ]
    },
    "attackPoliceStation1": {
        "text": "정면 돌파 중 부상을 입었지만 무기를 확보했습니다. 응급 처치를 할까요?",
        "choices": [
            { "text": "응급 처치를 시도한다.", "nextScene": "doFirstAid1" },
            { "text": "부상에도 불구하고 출발한다.", "nextScene": "startJourney2" }
        ]
    },
    "doFirstAid1": {
        "text": "응급 처치를 성공적으로 마치고 무기를 챙겼습니다.",
        "choices": [
            { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney3" },
            { "text": "식량과 의약품을 추가로 수집한다.", "nextScene": "gatherSupplies2" }
        ]
    },
    "gatherSupplies1": {
        "text": "식량과 의약품을 수집하기 위해 슈퍼마켓으로 향합니다. 약탈자들이 있을 수 있습니다.",
        "choices": [
            { "text": "약탈자들과 협상한다.", "nextScene": "negotiateLooters1" },
            { "text": "몰래 들어가 물품을 챙긴다.", "nextScene": "sneakIntoSupermarket1" }
        ]
    },
    "negotiateLooters1": {
        "text": "약탈자들과의 협상이 실패해 위험한 상황이 되었습니다.",
        "choices": [
            { "text": "싸운다.", "nextScene": "fightLooters1" },
            { "text": "도망친다.", "nextScene": "escapeFromLooters1" }
        ]
    },
    "fightLooters1": {
        "text": "지미는 약탈자들과의 싸움에서 승리했지만 약간의 부상을 입었습니다.",
        "choices": [
            { "text": "응급 처치를 시도한다.", "nextScene": "doFirstAid2" },
            { "text": "부상에도 불구하고 이동한다.", "nextScene": "startJourney2" }
        ]
    },
    "doFirstAid2": {
        "text": "응급 처치를 성공적으로 마치고 식량과 의약품을 챙겼습니다.",
        "choices": [
            { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney4" },
            { "text": "린다에게 연락을 시도한다.", "nextScene": "callLinda1" },
            { "text": "근처에 생존자가 있는지 찾아본다.", "nextScene": "searchSurvivors1" }
        ]
    },
    "sneakIntoSupermarket1": {
        "text": "몰래 들어가 식량을 확보했습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "바로 출발한다.", "nextScene": "startJourney5" },
            { "text": "무기와 방어구를 찾으러 경찰서로 향한다.", "nextScene": "findWeapons2" }
        ]
    },
    "escapeFromLooters1": {
        "text": "지미는 물품을 얻지 못하고 슈퍼마켓을 빠져나옵니다.",
        "choices": [
            { "text": "도시를 떠난다.", "nextScene": "startJourney6" },
            { "text": "다른 곳에서 보급품을 찾아본다.", "nextScene": "gatherSupplies3" }
        ]
    },

    // 린다에게 연락 시도하기 분기 (10개)
    "callLinda1": {
        "text": "전기가 끊기고 통신망이 불안정하여 연락이 쉽지 않습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "통신 장비를 찾아본다.", "nextScene": "searchForCommDevice1" },
            { "text": "린다가 남긴 흔적을 찾는다.", "nextScene": "findLindaClues1" }
        ]
    },
    "findLindaClues1": {
        "text": "린다의 흔적을 찾을 수가 없다.",
        "choices": [
            { "text": "통신 장비를 찾아본다.", "nextScene": "searchForCommDevice1" }
        ]
    },
    "searchForCommDevice1": {
        "text": "지미는 통신 장비가 있을 가능성이 높은 장소를 떠올립니다. 어디로 갈까요?",
        "choices": [
            { "text": "군사기지로 간다.", "nextScene": "searchMilitaryBase1" },
            { "text": "방송국으로 간다.", "nextScene": "searchBroadcastStation1" }
        ]
    },
    "searchMilitaryBase1": {
        "text": "군사기지로 갔지만 경비가 삼엄합니다. 접근 방법을 선택하세요.",
        "choices": [
            { "text": "군인들과 협상한다.", "nextScene": "negotiateWithMilitary1" },
            { "text": "몰래 잠입한다.", "nextScene": "sneakIntoMilitaryBase1" }
        ]
    },
    "negotiateWithMilitary1": {
        "text": "군인들이 협상을 수락하여 통신 장비를 사용할 수 있게 되었습니다.",
        "choices": [
            { "text": "린다에게 연락을 시도한다.", "nextScene": "attemptContactLinda1" }
        ]
    },
    "sneakIntoMilitaryBase1": {
        "text": "잠입을 시도했지만 발각되었습니다. 어떻게 할까요?",
        "choices": [
            { "text": "싸운다.", "nextScene": "fightMilitary1" },
            { "text": "도망친다.", "nextScene": "escapeMilitaryBase1" }
        ]
    },
    "searchBroadcastStation1": {
        "text": "방송국에 도착했지만 문이 잠겨있습니다. 어떻게 할까요?",
        "choices": [
            { "text": "문을 부순다.", "nextScene": "breakIntoStation1" },
            { "text": "다른 경로를 찾는다.", "nextScene": "findAlternateRoute1" }
        ]
    },
    "breakIntoStation1": {
        "text": "문을 부수고 들어갔으나 경보가 울렸습니다. 빨리 통신 장비를 사용해야 합니다.",
        "choices": [
            { "text": "린다에게 급히 연락을 시도한다.", "nextScene": "attemptContactLinda2" },
            { "text": "경보를 무시하고 계속 진행한다.", "nextScene": "ignoreAlarm1" }
        ]
    },
    "attemptContactLinda1": {
        "text": "통신이 일시적으로 연결되었으나 린다는 전화를 받지 않습니다.",
        "choices": [
            { "text": "린다에게 메시지를 남긴다.", "nextScene": "leaveMessageForLinda1" },
            { "text": "다시 연락을 시도한다.", "nextScene": "attemptContactLinda3" }
        ]
    },
    "leaveMessageForLinda1": {
        "text": "린다에게 메시지를 남기고 도시를 빠져나갈 준비를 합니다.",
        "choices": [
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney8" }
        ]
    },
    "attemptContactLinda3": {
        "text": "더 이상 통신 장비가 작동하지 않습니다.",
        "choices": [
            { "text": "다시 연락을 시도한다.", "nextScene": "attemptContactLinda3" },
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney8" }
        ]
    },

    // 엔딩
    "startJourney1": {
        "text": "식량이 부족하여 결국 지미는 탈진해 쓰러집니다. 여정이 여기서 끝납니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "startJourney2": {
        "text": "과다출혈로 인해 지미는 샌드크릭에 도착하지 못하고 쓰러집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "startJourney3": {
        "text": "보급품이 부족하여 지미는 결국 탈진해 쓰러집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "startJourney4": {
        "text": "샌드크릭으로 가는 여정이 너무 멀게 느껴집니다. 린다는 이미 죽었을지도 모릅니다. 지미는 깊은 절망에 빠집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "startJourney5": {
        "text": "무기가 없는 상태에서 좀비와 마주친 지미는 싸우다 결국 목숨을 잃습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "startJourney8": {
        "text": "샌드크릭으로 가는 여정이 시작됩니다. 그러나 장담할 수 없는 미래입니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },




"gatherSupplies2": {
    "text": "슈퍼마켓에서 추가 식량과 의약품을 수집했습니다. 다음으로 어떻게 할까요?",
    "choices": [
        { "text": "무기를 찾아 경찰서로 향한다.", "nextScene": "findWeapons1" },
        { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney4" }
    ]
},

"escapeMilitaryBase1": {
    "text": "군사기지에서 도망치는 데 성공했지만 통신 장비는 확보하지 못했습니다.",
    "choices": [
        { "text": "다른 통신 장비를 찾는다.", "nextScene": "searchBroadcastStation1" },
        { "text": "바로 샌드크릭으로 향한다.", "nextScene": "startJourney6" }
    ]
},
"findAlternateRoute1": {
    "text": "다른 경로를 찾다가 방송국의 뒷문을 발견했습니다.",
    "choices": [
        { "text": "뒷문으로 잠입한다.", "nextScene": "attemptContactLinda1" },
        { "text": "경비가 많아 포기하고 떠난다.", "nextScene": "startJourney7" }
    ]
},
"takeSurvivor1": {
    "text": "부상당한 생존자를 데리고 함께 이동하기로 했습니다.",
    "choices": [
        { "text": "샌드크릭으로 함께 이동한다.", "nextScene": "startJourney10" },
        { "text": "주변을 더 탐색한다.", "nextScene": "searchMoreSurvivors1" }
    ]
},
"attemptContactLinda3": {
    "text": "더 이상 통신 장비가 작동하지 않습니다.",
    "choices": [
        { "text": "장비를 다시 점검하고 연락을 시도한다.", "nextScene": "attemptContactLinda1" },
        { "text": "연락을 포기하고 샌드크릭으로 출발한다.", "nextScene": "startJourney8" }
    ]
},
"helpVoice1": {
    "text": "주변에서 들리는 도움 요청 소리에 따라가 생존자를 발견했습니다. 어떻게 할까요?",
    "choices": [
        { "text": "부상자를 도와준다.", "nextScene": "assistSurvivor1" },
        { "text": "부상자를 데리고 간다.", "nextScene": "takeSurvivor1" }
    ]
},
"assistSurvivor1": {
    "text": "생존자는 지미에게 감사를 표하며 도움을 제안합니다.",
    "choices": [
        { "text": "생존자와 함께 여정을 이어간다.", "nextScene": "becomeAlly1" },
        { "text": "혼자 이동한다.", "nextScene": "startJourney11" }
    ]
},
"searchMoreSurvivors1": {
    "text": "새로운 생존자 그룹을 만나 함께 샌드크릭으로 떠나기로 합니다.",
    "choices": [
        { "text": "함께 샌드크릭으로 떠난다.", "nextScene": "startJourney12" },
        { "text": "안전한 장소로 이동한다.", "nextScene": "findSafeSpot1" }
    ]
}

};