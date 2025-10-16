import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="email" className="my-2">Email</Label>
            <Input id="email" placeholder="Digite seu email" />
          </div>
          <div>
            <Label htmlFor="password" className="my-2">Senha</Label>
            <Input id="password" type="password" placeholder="Digite sua senha" />
          </div>
          <div>
            
          </div>
          <Button className="w-full">Entrar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
