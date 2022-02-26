#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MySwiftThingy, NSObject)

RCT_EXTERN_METHOD(callbackMethod:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(simpleMethod:(NSString *)message)

@end
