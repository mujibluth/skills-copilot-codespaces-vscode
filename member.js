function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/member.html',
        controller: 'MemberController',
        controllerAs: 'member',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}