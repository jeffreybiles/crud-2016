export default function(){
  this.transition(
    this.fromRoute('monsters.index'),
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
