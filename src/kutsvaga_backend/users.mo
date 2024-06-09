import Bool "mo:base/Bool";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Float "mo:base/Float";
import Int64 "mo:base/Int64";

module {

    public type User = {
    principleId: Principal;
    title : Text;
    name : Text;
    surname: Text;
    email : Text;
    contact : Text;
    dob :  Text;
    gender : Text;
    country : Text;
    level : AccessLevel;
    regDate : Text;
  };
  public type UserUnOfficial = {
    title : Text;
    name : Text;
    surname: Text;
    email : Text;
    contact : Text;
    dob :  Text;
    gender : Text;
    country : Text;
    level : AccessLevel;
    regDate : Text;
  };
  public type UserUpdateUnOfficial = {
    title : Text;
    name : Text;
    surname: Text;
    email : Text;
    contact : Text;
    dob :  Text;
    gender : Text;
    country : Text;
    level : AccessLevel;
    regDate : Text;
  };

  public type AccessLevel = {
    #AGENT;
    #CLIENT;
  };

  public type Agent = {
    principleIdAgent: Principal;
    email : Text;
    physicalAddress : Text;
    city : Text;
    province : Text;
    phase : Text;
    regExpire : Text;
  };
  public type AgentUnOfficial = {
    email : Text;
    physicalAddress : Text;
    city : Text;
    province : Text;
    phase : Text;
    regExpire : Text;
  };
  public type AgentUpdateUnOfficial = {
    email : Text;
    physicalAddress : Text;
    city : Text;
    province : Text;
    phase : Text;
    regExpire : Text;
  };
  public type Payments = {
    email : Text;
    principleId : Principal;
    receiverAddress: Text;
    myAddress:Text;
    receiverEmail : Text;
    amount : Int64;
    purpose : Text;
    valid : Bool;
    datePaymentMade :Text;
    myBalance: Int64;
  };
  public type PaymentsUnOfficial = {
    email : Text;
    receiverAddress: Text;
    myAddress:Text;
    receiverEmail : Text;
    amount : Int64;
    purpose : Text;
    datePaymentMade : Text;
    internal: Bool;
    myBalance:Int64;
  };
}
