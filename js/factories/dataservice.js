
(function(){

    angular
        .module("online_test")
        .factory("DataService", DataService);

    
    function DataService(){
       

        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }


    var correctAnswers = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];

    var quizQuestions  = [
        {
            type: "text",
            text: "8x8",
            possibilities: [
                {
                    answer: "64"
                },
                {
                    answer: "115"
                },
                {
                    answer: "220"
                },
                {
                    answer: "500"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "7x3",
            possibilities: [
                {
                    answer: "150"
                },
                {
                    answer: "21"
                },
                {
                    answer: "80"
                },
                {
                    answer: "40"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "9x9",
            possibilities: [
                {
                    answer: "150"
                },
                {
                    answer: "10"
                },
                {
                    answer: "81"
                },
                {
                    answer: "40"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "1x1",
            possibilities: [
                {
                    answer: "150"
                },
                {
                    answer: "10"
                },
                {
                    answer: "80"
                },
                {
                    answer: "1"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "2x2",
            possibilities: [
                {
                    answer: "4"
                },
                {
                    answer: "8"
                },
                {
                    answer: "9"
                },
                {
                    answer: "0"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "1x6",
            possibilities: [
                {
                    answer: "4"
                },
                {
                    answer: "6"
                },
                {
                    answer: "7"
                },
                {
                    answer: "0"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "4x5",
            possibilities: [
                {
                    answer: "1"
                },
                {
                    answer: "8"
                },
                {
                    answer: "20"
                },
                {
                    answer: "22"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "33x10",
            possibilities: [
                {
                    answer: "144"
                },
                {
                    answer: "102"
                },
                {
                    answer: "82"
                },
                {
                    answer: "330"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "0x1000000000",
            possibilities: [
                {
                    answer: "0"
                },
                {
                    answer: "10000000000"
                },
                {
                    answer: "1000000000"
                },
                {
                    answer: "10000000"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "6x5",
            possibilities: [
                {
                    answer: "22"
                },
                {
                    answer: "30"
                },
                {
                    answer: "34"
                },
                {
                    answer: "31"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    

})();
