class Conversation extends ChatRoom{
    constructor(id, member1, member2){
        super(id);
        this.members = [
            member1,
            member2
        ]
    }
}