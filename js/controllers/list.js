
(function(){
    
    angular
        .module("online_test")
        .controller("listCtrl", ListController);
    
    
    ListController.$inject = ['quizMetrics', 'DataService'];

    
    function ListController(quizMetrics, DataService){
        var vm = this;

        
        vm.quizMetrics = quizMetrics; 
        
        
       
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 

        

        function activateQuiz(){
        
            quizMetrics.changeState("quiz", true);
        }
    }


})();
