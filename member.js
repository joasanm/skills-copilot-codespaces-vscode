function skillMember() {
  return {
    name: 'skillMember',
    type: 'member',
    path: '/skill/member',
    component: () => import('@/views/skill/member'),
    meta: {
      title: '技能成员',
      icon: 'table'
    }
  }
}
  