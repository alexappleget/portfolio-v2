"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/input";
import { Textarea } from "../Textarea/textarea";
import { Button } from "../Button/button";
import { sendEmail } from "@/email/sendEmail";
import React, { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter a valid name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Please provide a message.",
  }),
});

export const ContactMe = React.forwardRef<HTMLDivElement | null>((_, ref) => {
  const [contactFormStatus, setContactFormStatus] = useState<string>("submit");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (contactInfo: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await sendEmail(contactInfo);
      setContactFormStatus("submitted");
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    switch (contactFormStatus) {
      case "submit":
        return (
          <>
            <h2 className="text-3xl font-extrabold mb-6 text-center text-[#4A2C2A]">
              Get in Touch
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-lg text-[#4A2C2A]">
                          Name:
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-lg p-3 bg-[#F5F1E8] border-[#4A2C2A] focus:ring-[#4A2C2A] focus:border-[#4A2C2A]"
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-lg text-[#4A2C2A]">
                          Email:
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="text-lg p-3 bg-[#F5F1E8] border-[#4A2C2A] focus:ring-[#4A2C2A] focus:border-[#4A2C2A]"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-[#4A2C2A]">
                        Message:
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="text-lg p-3 min-h-[200px] bg-[#F5F1E8] border-[#4A2C2A] focus:ring-[#4A2C2A] focus:border-[#4A2C2A]"
                          placeholder="Type here..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isLoading ? (
                  <Button
                    className="group bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] text-xl py-3 mt-4"
                    type="submit"
                  >
                    <div className="loading-spinner min-w-[1.75rem] max-w-[2.25rem] min-h-[1.75rem] max-h-[2.25rem] rounded-full border-4 border-[#F5F1E8] border-t-[#E6D2B5] group-hover:border-[#F5F1E8] group-hover:border-t-[#4A2C2A] animate-spin motion-reduce:hidden" />
                  </Button>
                ) : (
                  <Button
                    className="bg-[#4A2C2A] text-[#E6D2B5] hover:bg-[#E6D2B5] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] text-xl py-3 mt-4"
                    type="submit"
                  >
                    Send
                  </Button>
                )}
              </form>
            </Form>
          </>
        );
      case "submitted":
        return (
          <h1 className="text-center">✅ Your response has been submitted!</h1>
        );
    }
  };

  return (
    <section
      className={`my-40 w-11/12 md:w-full max-w-4xl mx-auto p-8 ${
        contactFormStatus === "submit" && "bg-[#E6D2B5] rounded-lg shadow-lg"
      }`}
      id="contact-me"
      ref={ref}
    >
      {renderContent()}
    </section>
  );
});

ContactMe.displayName = "ContactMe";
