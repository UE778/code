const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  // if the number randomly generated is less than 0.2, return true
  return Math.random() < 0.2
}

const newMessage = (getFromAPI) => {
  // TODO: return a random message as an object with two keys, subject and sender
  var senderList = ['Frank', 'Alice','Fido']
  var randomSender = senderList[Math.floor(Math.random() * senderList.length)]

  var subjectList = ['Greetings','vacation plan','Payment Due']
  var randomSubject = subjectList[Math.floor(Math.random() * senderList.length)]
  var newEmail = {
  "sender": randomSender,
  "subject" : randomSubject
  }
  return newEmail
}

var message = newMessage()
const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  //generate the new messsage

  let messageHTML = `
  <div class="row message unread">
      <div class="col-3">${message.sender}</div>
      <div class="col-9">${message.subject}</div>
    </div>
  `
  //find the location of inbox html
  let inbox = document.querySelector('#inbox div.row')
  //insert new message on top
  inbox.insertAdjacentHTML("beforebegin",messageHTML)

};

fetch("https://raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json")
.then(response => response.json())
.then((data) => {
  console.log(data)
  callback(data)
})

//const refresh = () => {
  //if (hasNewMessage){
    //newMessage(getFromAPI)
  //}

//}

/*const refresh = () => {
  if (hasNewMessage()){
    var message = newMessage()
    appendMessageToDom(message)
  }

  let h1Content = document.querySelectorAll(".unread")
  let numberOfH1 = h1Content.length
  const counter = document.querySelector("h1 #count")
  counter.innerText = `(${numberOfH1})`

}*/



  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.


















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

