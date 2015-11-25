angular.module("app", []);

angular.module('app').controller('appController', function($scope) {
  var note = {
    date: 'drafting...',
    note: $scope.reply,
    ownable: {
      name: localStorage.getItem('name'),
      avatar: localStorage.getItem('avatar')
    },
    in_api: false,
    documents: []
  };

  $scope.watch('reply', function() {
    var drafter;
    checkNotes()
    if(!drafter) {
      $scope.active.notes.unshift(note);
    }

    function checkNotes() {
      for(var noteIndex = 0; noteIndex < $scope.active.notes.length; ++noteIndex) {
        if($scope.active.notes[i].in_api === false) {
          drafter = true;
          checkNoteLength($scope.active.notes, $scope.active.notes[i].note, noteIndex);
        }
      }
    }

    function checkNoteLength(notes, noteAtIndex, noteIndex) {
      if($scope.reply.length === 0 && !drafter) {
        $scope.active.notes.splice(noteIndex, 1);
      }
      else {
        noteAtIndex.note = $scope.reply
      }
    }
});
