const id_list = ['muzi', 'frodo', 'apeach', 'neo'];

const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];

const k = 2;

function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const report_list = {};

  // 불량이용자 : [신고한 유저들] 로 이루어질 맵 생성 (빈 배열 할당)
  id_list.map((user) => (report_list[user] = []));

  report.map((user) => {
    const [user_id, report_id] = user.split(' ');
    // user_id 가 없을 때만 추가해서 중복카운트 방지
    if (!report_list[report_id].includes(user_id))
      report_list[report_id].push(user_id);
  });

  for (let [key, val] of Object.entries(report_list)) {
    // 신고 건수가 k를 넘는 정지대상 이용자
    if (val.length >= k) {
      // id_list의 유저 인덱스와 동일한 answer 배열 증가
      val.map((user) => (answer[id_list.indexOf(user)] += 1));
    }
  }
  console.log(answer);
}

solution(id_list, report, k);
