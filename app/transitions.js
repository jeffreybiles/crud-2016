export default function(){
  // This is a fantastic API that is pretty much self-explanatory
  this.transition(
    this.fromRoute('monsters.index'),
    // the toRoute here is "anything"
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('monsters.monster.show'),
    this.toRoute('monsters.monster.edit'),
    this.use('toUp'),
    this.reverse('toDown')
  )
}
