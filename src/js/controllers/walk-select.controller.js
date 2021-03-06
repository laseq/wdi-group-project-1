angular
  .module('DogApp')
  .controller('WalkSelectCtrl', WalkSelectCtrl);

WalkSelectCtrl.$inject = ['dog', '$uibModalInstance', 'Dog', '$stateParams', 'CurrentUserService', '$state'];
function WalkSelectCtrl(dog, $uibModalInstance, Dog, $stateParams, CurrentUserService, $state) {
  const vm = this;
  vm.dog = dog;
  vm.user = CurrentUserService.currentUser;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function walkRequest() {
    console.log('user--------', vm.user._id);
    console.log('walk-------', vm.select);
    Dog
    .selectWalk($stateParams, { date: vm.select })
    .$promise
    .then(dog => {
      console.log('I HAVE MADE A WALK REQUEST', dog);
      // $state.go('dogsShow', { id: dog._id });
      vm.close();
    })
    .catch(err => {
      console.log(err);
    });
  }


  vm.request = walkRequest;

}
