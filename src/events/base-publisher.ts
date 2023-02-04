import { NatsConnection, StringCodec, JetStreamManager } from "nats";
import { Subjects } from "./subjects";

interface Event {
    subject: Subjects,
    data:any
}

export abstract class Publisher <T extends Event> {
    private client: NatsConnection
    abstract subject:T['subject']
    private encoder = StringCodec()
  
  
      constructor(client: NatsConnection){
      this.client = client;
    }

    async addStream(jsm: JetStreamManager, streamName:string, subjects:string[]){
        await jsm.streams.add({name:streamName, subjects})
    }
  
    publish(data:T['data'], streamName:string): Promise<void>{
      const js = this.client.jetstream();
  
      return new Promise((resolve, reject) => {
        try {
          js.publish(this.subject,this.encoder.encode(data),{
            expect:{streamName}
          })
          resolve()
        } catch (error) {
          reject(error)
        }
      })
  
    }
  }
  