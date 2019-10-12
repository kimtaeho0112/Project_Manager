# capstone Project Manager
# 대학교 생활 전반의 로드맵을 제공

# 주요기능
 - 타 전공 학생들과 접점이 없는 경우에 조원을 모집할 수 있는 대학교 내 인원 모집이 가능한 플랫폼
 - 진행되는 프로젝트 내에서 본인의 역할과 진행 상황을 보존.
 - 대학교 재학 기간 동안 본인이 참가한 프로젝트들을 한번에 보고(ROAD MAP) 진행상황 까지 볼 수 있는 포트폴리오 제공
 - 결과물을 포스트할 수 있는 공간 제공 -> USER간 추천 가능

# 기대효과
 - 본인의 대학 재학 기간 중 활동을 취업기간인 4학년 때 급하게 정리할 필요없이 모든 진행상황과 결과물, 본인의 역할 까지 명시
 - 공모전처럼 자료가 남아 있지 않아 항상 인정을 못받아왔던 학부생 기간 중 활동한 내용(작은 프로젝트들)을 객관적인 자료로 보존
 - 실제 현업에서 프로젝트 구상과 기술 구현이 역할이 나뉘어진 것 처럼 타 전공 학우들과 프로젝트 협업 가능
 - 많은 추천 수를 받은 결과물(프로젝트)들은 기업의 이목을 끌 수 있는 효과 기대 (GIThub System)

# FRONT-END
  [React]
  [VanillaJS]

# BACK-END
  [Model] : Schema
   - USER
   - GOAL
   - PROJECT
   - STORY

  [Controller]
   - projectComtroller
   - userController

  [Views] : pug

  [NodeJS]
  [SocketIO]
  [Express]

# 타 전공과 융합한 기능

# 진행상황
BACK-END                                                            FROMT-END : template까지만 구현
  [O] DB                                                                [..] LOGIN
  [O] JOIN                                                              [..] JOIN  
  [O] LOGIN                                                             [..] LOGOUT
  [O] LOGOUT                                                            [..] EDIT PROFILE
  [O] EDIT PROFILE                                                      [..] CREATE PROJECT
  [O] CREATE PROJECT                                                    [..] CHAT
  [O] CHAT                                                              [..] CALENDER
  [O] WEBPACK                                                           [..] ADD GOAL
  [O] GULP                                                              [..] BUILD TIMELINE
  [O] EXPRESS                                                           [..] ADD STORY
  [O] BABEL
  [] SCOUT MEMBER ROOM
  [] CALENDER
  [] ADD GOAL
  [] BUILD TIMELINE
  [] ADD STORY
  [] SCSS
  [] REALTIME PUSH NOTIFICATION

  [] CONTRIBUTION(타전공의 전공을 살린 기능)