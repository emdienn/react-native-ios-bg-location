import Foundation

@objc(MySwiftThingy)
class MySwiftThingy: NSObject {

  @objc func callbackMethod(callback: RCTResponseSenderBlock) -> Void {
    let resultsDict = [
      "success" : true
    ];

    callback([NSNull() ,resultsDict])
  }

  @objc func simpleMethod(message: String!) {
    print("\(message)")
  }
}
