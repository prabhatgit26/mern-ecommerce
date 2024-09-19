import { Label } from "@radix-ui/react-label";



function CommonForm({formControls}) {
    
    return ( 
        <form>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem=> <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {
                            renderInputByComponentType(controlItem)
                        }
                    </div>)
                }
            </div>
        </form>
     );
}

export default CommonForm;