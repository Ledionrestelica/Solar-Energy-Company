import React, { useState } from "react";
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
  const [option7, setOption7] = useState("");
  const [option8, setOption8] = useState("");
  const [option9, setOption9] = useState("");
  const [gatuadress, setGatu] = useState("");
  const [gatunr, setGatunr] = useState("");
  const [postnummer, setPostNummer] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [progress, setProgress] = useState(0);

  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      "Type of Building": option1,
      "Where should they be installed": option2,
      "Do you know the area covered": option3,
      "Approx area": option4,
      "Do you know Elctricity Consumption": option5,
      "Electricity consumption": option6,
      "Excess electricity sold to grid?": option7,
      "Do you want offers": option8,
      Kommentarer: option9,
      Address: gatuadress,
      Gatunummer: gatunr,
      Postnummer: postnummer,
      Name: name,
      Email: email,
      Phone: phone,
    };

    fetch("https://timi-form.vercel.app/api/send-email", {
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
    option7,
    option8,
    option9,
    gatuadress,
    gatunr,
    postnummer,
    name,
    email,
    phone
  );

  return (
    <form className="px-2 py-5 min-h-screen">
      {step === 1 && (
        <div id="step-1">
          <p className="font-medium text-[16px] mb-6">
            For what type of building should the solar cells be used?
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
                value="garage"
                id="r2"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="r2"
              >
                Garage
              </Label>
            </div>
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem className="rounded-[6px]" value="flera" id="r3" />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="r3"
              >
                Flera
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
            Where should the solar cells be installed?
          </p>
          <Select onValueChange={(value) => setOption2(value)} value={option2}>
            <SelectTrigger className="border-[#CDD6DF] rounded-[6px] py-3">
              <SelectValue className="py-3" placeholder="Select installation" />
            </SelectTrigger>
            <SelectContent className="rounded-[6px] border-[#CDD6DF]">
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="sideways">Sideways</SelectItem>
            </SelectContent>
          </Select>
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
          <Progress className="[&>div]:bg-primary my-5" value={progress} />
          <p className="text-[16px] font-medium mb-[31px]">
            Do you know approximately how large an area can be covered by solar
            cells?
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
            Approximately how big is the area?
          </p>
          <div className="flex border border-[#CDD6DF] items-center rounded-[12px] px-4 w-[200px]">
            <Input
              className="py-6 rounded-[8px] relative border-none focus-visible:ring-0"
              placeholder="123"
              disabled={option3 === "no"}
              onChange={(e) => {
                setOption4(e.target.value), setProgress(progress + 5.88);
              }}
            ></Input>
            <p className="text-[#1A9BA7]">kwm</p>
          </div>
          <p className="text-[16px] font-medium mt-[30px] mb-[31px]">
            Do you know approximately the annual electricity consumption in the
            building?
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
            Approximately how big is the area?
          </p>
          <div className="flex border border-[#CDD6DF] items-center rounded-[12px] px-4 w-[200px]">
            <Input
              className="py-6 rounded-[8px] relative border-none focus-visible:ring-0"
              placeholder="123"
              disabled={option5 === "no"}
              value={option6}
              onChange={(e) => {
                setOption6(e.target.value);
              }}
            ></Input>
            <p className="text-[#1A9BA7]">kWh</p>
          </div>
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
      {step === 3 && (
        <div>
          <p className="text-[16px] font-medium mb-[31px]">
            Should excess electricity from the solar cells be sold via the grid?
          </p>
          <RadioGroup
            value={option7}
            onValueChange={(value) => setOption7(value)}
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
            Do you also want offers on one or more of the following?
          </p>
          <RadioGroup
            value={option8}
            onValueChange={(value) => setOption8(value)}
            className="gap-4"
          >
            <div
              className={cn(
                "flex border border-[#CDD6DF] px-2 items-center space-x-2 rounded-[12px] cursor-pointer",
                "[&:has(input:checked)]:border-[#1A9BA7]"
              )}
            >
              <RadioGroupItem
                className="rounded-[6px]"
                value="villa"
                id="step3-1"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="step3-1"
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
                value="garage"
                id="step3-2"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="step3-2"
              >
                Garage
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
                value="flera"
                id="step3-3"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="step3-3"
              >
                Flera
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
                id="step3-4"
              />
              <Label
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "12px 0px",
                  cursor: "pointer",
                }}
                htmlFor="step3-4"
              >
                Lantbruk
              </Label>
            </div>
          </RadioGroup>
          <p className="text-[16px] font-medium mt-[30px] mb-[10px]">
            Kommentarer (frivilligt)
          </p>
          <Textarea
            className="border border-[#CDD6DF] rounded-[12px] focus-visible:ring-0"
            placeholder="Kommentarer"
            onChange={(e) => setOption9(e.target.value)}
            rows={4}
          ></Textarea>
          <button
            className={cn(
              "w-full text-lg py-3 font-medium mt-6 rounded-full",
              "bg-primary text-white"
            )}
            type="button"
            onClick={() => setStep(4)}
            disabled={!option7 || !option8}
          >
            Next
          </button>
        </div>
      )}
      {step == 4 && (
        <div className="space-y-8">
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
