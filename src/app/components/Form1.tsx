"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Progress } from "@/components/ui/progress";

const Form1 = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [option6, setOption6] = useState("");
  const [gatuadress, setGatu] = useState("");
  const [gatunr, setGatunr] = useState("");
  const [postnummer, setPostNummer] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const heroElement = document.getElementById("hero");

    if (step === 1 && heroElement) {
      heroElement.style.display = "";
    } else if (heroElement) {
      heroElement.style.display = "none";
    }
  }, [step]);

  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      "Vänligen välj vilken typ av anläggning det gäller?": option1,
      "Vad är du intresserad av?": option2,
      "Är ni två personer som äger fastigheten?": option3,
      "Är det viktigt för er med långa garantier?": option4,
      "Vill ni ha en helhetslösning med batteri?": option5,
      "Är det viktigt med Europeiska leverantörer?": option6,
      Address: gatuadress,
      Gatunummer: gatunr,
      Postnummer: postnummer,
      Name: name,
      Email: email,
      Phone: phone,
    };

    fetch("https://solpricer.se/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Form submitted successfully!");
          router.push("/thank-you");
        } else {
          toast.error("Failed to send email.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong.");
      });
  }

  console.log(
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    gatuadress,
    gatunr,
    postnummer,
    name,
    email,
    phone
  );

  return (
    <form className="min-h-screen px-[10px] md:px-[20px] lg:px-[70px] w-full mt-[50px]">
      {step === 1 && (
        <div id="step-1">
          <p className="font-medium text-[16px] mb-6">
            Vänligen välj vilken typ av anläggning det gäller?
          </p>
          <RadioGroup
            className="gap-4"
            value={option1}
            onValueChange={(value) => setOption1(value)}
          >
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem className="rounded-[6px]" value="villa" id="r1" />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="r1"
              >
                Villa
              </Label>
            </div>
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem
                className="rounded-[6px]"
                value="lantbruk"
                id="r4"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="r4"
              >
                Lantbruk
              </Label>
            </div>
          </RadioGroup>
          <p className="font-medium text-[16px] mt-6 mb-2">
            Vad är du intresserad av?
          </p>
          <RadioGroup
            className="gap-4"
            value={option2}
            onValueChange={(value) => setOption2(value)}
          >
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem
                className="rounded-[6px]"
                value="solceller"
                id="solceller"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="solceller"
              >
                Solceller
              </Label>
            </div>
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem
                className="rounded-[6px]"
                value="batteri"
                id="batteri"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="batteri"
              >
                Batteri
              </Label>
            </div>
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem
                className="rounded-[6px]"
                value="laddbox"
                id="laddbox"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="laddbox"
              >
                Laddbox
              </Label>
            </div>
          </RadioGroup>
          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!option1 || !option2}
            className={cn(
              "w-full text-lg py-3 font-medium mt-6 rounded-full",
              "bg-primary text-white",
              {
                "opacity-50 cursor-not-allowed": !option1 || !option2,
                "hover:bg-primary-dark": option1 && option2,
              }
            )}
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="flex flex-col">
            {progress < 30 && (
              <p className="self-end text-primary text-[16px]">
                You can do this!
              </p>
            )}
            {progress > 30 && (
              <p className="self-end text-primary text-[16px]">Nearly there</p>
            )}
            <Progress className="[&>div]:bg-primary my-5" value={progress} />
          </div>
          <p className="text-[16px] font-medium mb-[31px]">
            Är ni två personer som äger fastigheten?
          </p>
          <RadioGroup
            onValueChange={(value) => {
              setOption3(value);
              setProgress(progress + 5.88);
            }}
            value={option3}
            className="flex gap-8"
          >
            <div className="flex gap-2  items-center justify-center">
              <RadioGroupItem value="yes" id="r-5"></RadioGroupItem>
              <Label>Yes</Label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <RadioGroupItem value="no" id="r-6"></RadioGroupItem>
              <Label>No</Label>
            </div>
          </RadioGroup>
          <p className="text-[16px] font-medium mt-[40px] mb-[31px]">
            Är det viktigt för er med långa garantier?
          </p>
          <RadioGroup
            onValueChange={(value) => {
              setOption4(value);
              setProgress(progress + 5.88);
            }}
            value={option4}
            className="flex gap-8"
          >
            <div className="flex gap-2  items-center justify-center">
              <RadioGroupItem value="yes" id="r-5"></RadioGroupItem>
              <Label>Yes</Label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <RadioGroupItem value="no" id="r-6"></RadioGroupItem>
              <Label>No</Label>
            </div>
          </RadioGroup>
          <p className="text-[16px] font-medium mt-[30px] mb-[31px]">
            Vill ni ha en helhetslösning med batteri?
          </p>
          <RadioGroup
            value={option5}
            onValueChange={(value) => {
              setOption5(value), setProgress(progress + 5.88);
            }}
            className="flex gap-8"
          >
            <div className="flex gap-2  items-center justify-center">
              <RadioGroupItem value="yes" id="r-6"></RadioGroupItem>
              <Label>Yes</Label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <RadioGroupItem value="no" id="r-8"></RadioGroupItem>
              <Label>No</Label>
            </div>
          </RadioGroup>
          <p className="text-[16px] font-medium mt-[40px] mb-[31px]">
            Är det viktigt med Europeiska leverantörer?
          </p>
          <RadioGroup
            value={option6}
            onValueChange={(value) => {
              setOption6(value), setProgress(progress + 5.88);
            }}
            className="flex gap-8"
          >
            <div className="flex gap-2  items-center justify-center">
              <RadioGroupItem value="yes" id="r-6"></RadioGroupItem>
              <Label>Yes</Label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <RadioGroupItem value="no" id="r-8"></RadioGroupItem>
              <Label>No</Label>
            </div>
          </RadioGroup>
          <button
            className={cn(
              "w-full text-lg py-3 font-medium mt-6 rounded-full",
              "bg-primary text-white"
            )}
            type="button"
            disabled={!option3 || !option4 || !option5}
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </div>
      )}
      {step == 3 && (
        <div className="space-y-8">
          <div className="flex flex-col">
            {progress < 30 && (
              <p className="self-end text-primary text-[16px]">
                You can do this!
              </p>
            )}
            {progress > 30 && (
              <p className="self-end text-primary text-[16px]">Nearly there</p>
            )}
            <Progress className="[&>div]:bg-primary my-5" value={progress} />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[16px]">Address</p>
              <Input
                placeholder="Gatuadress"
                required
                onChange={(e) => setGatu(e.target.value)}
                className="rounded-[12px] h-[44px] border-[#CDD6DF] w-full flex-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[16px]">Gatunr</p>
              <Input
                placeholder="1A"
                required
                onChange={(e) => setGatunr(e.target.value)}
                className="rounded-[12px] h-[44px] border-[#CDD6DF]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[16px]">Postnummer</p>
            <Input
              placeholder="12345"
              required
              onChange={(e) => setPostNummer(e.target.value)}
              className="rounded-[12px] h-[44px] border-[#CDD6DF]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[16px]">Enter your fullname</p>
            <Input
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
              className="rounded-[12px] h-[44px] border-[#CDD6DF]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[16px]">E-Mail Address</p>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="example@gmail.com"
              className="rounded-[12px] h-[44px] border-[#CDD6DF]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[16px]">Phone Number</p>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="+46"
              className="rounded-[12px] h-[44px] border-[#CDD6DF]"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-full bg-primary text-white font-medium text-[16px]"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default Form1;
