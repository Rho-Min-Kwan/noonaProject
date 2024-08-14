import logo from './logo.svg';
import './App.css';
import box from './component/box';
import { useState } from 'react';



//1. box 2ea -title, photo, result
//2. rock scissor paper  :callback function
//3. click button > show the results on box  : state
//4. computer choose results randomly
//5. decide results by the 3,4 
//6. change the boundary colors(win-green, lose-red, tie-black)

//useState

const choice = {
  rock:{
    name : 'rock',
    img: 'https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg'
  },
  scissor:{
    name : 'scissor',
    img: 'https://cafe24.poxo.com/ec01/bibon1/jy78sT5iv9X+V5IHQBaKwrjoUZw7/nGXjx58SNFF4bK6NrHp9v6yW73e7/DyTNtncYBJmFI45IbmtzNo91A3rQ==/_/web/product/big/202101/833fa88eae073a583699cc737f0b8a91.jpg'
  },
  paper:{
    name : 'paper',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/2020040509320204_Messages_01088768900.jpg'
  }

}
function App() {

  const {userSelect, setUserSelect} = useState(null);
  const {computerSelect,setComputerSelect} = useState(null);
  const {result, setResult} = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
     // userSelect = choice[userChoice] 오류남
    //console.log('선택됨',userChoice)

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));

  };

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    //user == computer tie
    //user == rock, computer == 'scissors'  : user win
    //user == rock, computer == 'paper'  : user lose
    //user == scissors, computer == 'paper'  : user win
    //user == scissors, computer == 'rock'  : user lose
    //user == paper, computer == 'rock'  : user win
    //user == paper, computer == 'scissors'  : user lose

    if (user.name == computer.name){
      return 'tie';
    // }else if (user.name == 'rock'){
    //   if (computer == 'scissors'){
    //     return 'win'
    //   }else {
    //     return'lose'
    //   }
    // }
    } else if (user.name == 'rock') return computer.name == 'scissors'?'win':'lose';
    else if (user.name == 'scissors') return computer.name == 'paper'?'win':'lose';
    else if (user.name == 'paper') return computer.name == 'rock'?'win':'lose';
  };




  const randomChoice = () => {
      let itemArray = Object.keys(choice);  //객체에 키값만 뽑아서 array로 만드는 함수
      console.log('item array',itemArray);  
      let randomItem = Math.floor(Math.random() * itemArray.length); 
      //console.log('random value', randomItem);
      let final = choice[itemArray[randomItem]];
      //console.log('final', final);
      return choice[final];
  };



  return (
    <div>

      <div className='main'>
        <box title = 'uuu' item={userSelect} result = {result}/>
        <box title = 'com' item={computerSelect} result = {result}/>
      </div>
      <div className='main'>
        <button onClick={play('rock')}>rock</button>
        <button onClick={play('scissor')}>scissor</button>
        <button onClick={play('paper')}>paper</button>

      </div>
    </div>
  );
};

export default App;



// good case :   https://yun7420.github.io/rockscissorspaper-2023/  


/* // setUserSelect 오류 해결

오류 내용:

setUserSelect is not a function

원인:

setUserSelect 함수는 React 18에서 더 이상 지원되지 않습니다.

해결 방법:

setUserSelect 대신 CSS 스타일을 사용하여 요소의 선택 가능성을 제어하세요. 예를 들어, 다음과 같이 사용할 수 있습니다.

element {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} // */

