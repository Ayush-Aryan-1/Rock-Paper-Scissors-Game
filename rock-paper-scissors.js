let score = JSON.parse(localStorage.getItem('score')) 
        || {
          wins: 0,
          losses: 0,
          ties: 0
        };

        udateScoreElemet();
          
      /*  if(!score){ // !score = null
          score = {
            wins: 0,
            losses: 0,
            ties: 0
          };
       } */
        function playGame(playerMove){
          const computerMove = pickComputerMove();

          let result = '';
          //for scissors
          if (playerMove === 'scissors'){
            if(computerMove ==='rock'){
            result = 'lost';
          }
          else if(computerMove==='paper'){
            result = 'won';
          }
          else if(computerMove==='scissors'){
            result = 'tie';
          }
        }
          //for paper
          else if(playerMove === 'paper'){
          if(computerMove ==='rock'){
            result = 'won';
          }
          else if(computerMove==='paper'){
            result = 'tie';
          }
          else if(computerMove==='scissors'){
            result = 'lost';
          }
           }

           //for rock
           else if(playerMove === 'rock'){
            if(computerMove==='rock'){
            result = 'tie';
          }
          else if(computerMove==='paper'){
            result = 'lost';
          }
          else if(computerMove==='scissors'){
            result = 'won';
          }
           }
          if(result === 'won'){
            score.wins++;
          }else if(result ==='lost'){
            score.losses++;
          }else if(result === 'tie'){
            score.ties++;
          }

          localStorage.setItem('score', JSON.stringify(score));

          udateScoreElemet();

          document.querySelector('.js-moves').innerHTML =
          `You Picked <img src="rock-paper-scissors-images/${playerMove}-emoji.png" class="move-icon">
          ---
          Computer Picked <img src="rock-paper-scissors-images/${computerMove}-emoji.png" class="move-icon">`;

          document.querySelector('.js-result').innerHTML = `You ${result}`;
        
       }

          function udateScoreElemet(){
            document.querySelector('.js-score').innerHTML = 
        `win: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
          }

         function pickComputerMove(){
            const randomNumber = Math.random();
            let computerMove = '';
            
            if(randomNumber >= 0 && randomNumber < 1/3){
               computerMove = 'rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
               computerMove ='paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1){
               computerMove ='scissors';
            }
            return computerMove;
         }