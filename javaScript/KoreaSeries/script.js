const $predictButton = document.querySelector('#predict-button');
$predictButton.addEventListener('click', function () {
  // results 객체
  // : LG와 KT 각각의 승리 횟수를 추적
  let results = {
    'LG': 0,
    'KT': 0,
  }

  // 최대 게임 횟수를 저장
  // 7전 4선승제 >> 최대 7게임
  let maxGames = 7;

  // 지금까지 진행된 게임 수를 저장하는 변수
  let gamesPlayed = 0;

  // 경기 결과 배열(각 경기마다 누가 이겼는지 기록)
  let gameOutcomes = [];

  // 시리즈가 끝날 때까지 게임을 진행
  // (한 팀이 4승을 하거나, 최대 게임 수에 도달할 때까지)
  while (gamesPlayed < maxGames && results['LG'] < 4 && results['KT'] < 4) {
    // 난수를 생성하여 0.5 미만일 경우 LG 승리, 그렇지 않으면 KT의 승리
    let winner = Math.random() < 0.5 ? 'LG' : 'KT';

    // 승자의 승리 횟수를 1증가
    results[winner]++;

    // 진행된 게임의 수 1 증가
    gamesPlayed++;

    // 승리한 팀 배열에 push
    gameOutcomes.push(`${gamesPlayed}차전 ${winner} 승리`);

    // 모든 게임이 종료된 경우 최종 결과를 화면에 표시하는 함수를 호출
    displayResults(results, gameOutcomes);
  }
});

const displayResults = (results, gameOutcomes) => {
  // 최종 결과를 받아서 웹 페이지에 표시
  let resultText = `현재 시리즈 결과: LG ${results['LG']} : KT ${results['KT']}`;

  gameOutcomes.forEach((outcome) => resultText += `<br>${outcome}`);

  // LG 또는 KT가 4승을 달성 했다면 시리즈 승리 메시지 출력
  if (results['LG'] === 4 || results['KT'] === 4) {
    // 승리한 팀에 따라 다른 메시지 출력
    resultText += `<br><strong>${results['LG'] === 4 ? 'LG Twins' : 'KT Wiz'}가 시리즈에서 승리했습니다.</strong>`;
  }

  // 결과 값 HTML에 출력
  document.querySelector('#prediction-result').innerHTML = resultText;
}


