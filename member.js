function skillMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skill-member.html',
    scope: {
      member: '='
    }
  };
}