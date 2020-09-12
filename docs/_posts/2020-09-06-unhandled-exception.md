---
title: Unandled Exception
date: 2020-09-06 8:10AM
categories: tech test
---
```
0:002>kb
  # ChildEBP RetAddr  Args to Child
 1c 021ef098 771a2ba9 021ef0f4 00000000 021ef0f4 kernel32!UnhandledExceptionFilter+0x127

0:002> dd 021ef0f4
021ef0f4  021ef1f4 021ef21c 77122410 00000001

0:002> .exr 021ef1f4
ExceptionAddress: 7716b8b6 (ntdll!TppWaiterpThread+0x00000623)
   ExceptionCode: c000070a
  ExceptionFlags: 00000000
NumberParameters: 5
   Parameter[0]: c0000022
   Parameter[1]: 00000728
   Parameter[2]: 0717d910
   Parameter[3]: 01355af0
   Parameter[4]: 745ac275
   
0:002> !error c000070a
Error code: (NTSTATUS) 0xc000070a (3221227274) - Status 0x%08x was returned, waiting on handle 0x%x for wait 0x%p, in waiter 0x%p.
(https://stackoverflow.com/questions/37358549/net-service-crashes-in-unmanaged-thread-with-unknown-exception)
(https://devblogs.microsoft.com/oldnewthing/20160115-00/?p=92861)

0:002> .cxr 021ef21c
eax=021ef71c ebx=00000728 ecx=770eb4fb edx=77116bb4 esi=01355af0 edi=0717d910
eip=7716b8b6 esp=021ef66c ebp=021ef7e4 iopl=0         nv up ei pl zr na pe nc
cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00000246
ntdll!TppWaiterpThread+0x623:
7716b8b6 ff75e4          push    dword ptr [ebp-1Ch]  ss:0023:021ef7c8=c0000022

0:002>kb
  *** Stack trace for last set context - .thread/.cxr resets it
 # ChildEBP RetAddr  Args to Child              
00 021ef7e4 75f4efac 770eb4fb 021ef830 77133628 ntdll!TppWaiterpThread+0x623
01 021ef7f0 77133628 01355af0 75044c25 00000000 kernel32!BaseThreadInitThunk+0xe
02 021ef830 771335fb 770ffb5f 01355af0 00000000 ntdll!__RtlUserThreadStart+0x70
03 021ef848 00000000 770ffb5f 01355af0 00000000 ntdll!_RtlUserThreadStart+0x1b

0:002>!handle
(not found handle 728)



```
